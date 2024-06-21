import boto3
import json

def get_object_urls(bucket_name):
    s3 = boto3.client('s3')
    response = s3.list_objects_v2(Bucket=bucket_name)

    folder_structure = {}
    for obj in response.get('Contents', []):
        object_key = obj['Key']
        folder, filename = object_key.rsplit('/', 1)
        if folder not in folder_structure:
            folder_structure[folder] = []
        object_url = f"https://{bucket_name}.s3.amazonaws.com/{object_key}"
        folder_structure[folder].append({'filename': filename, 'url': object_url})

    return folder_structure

def save_to_json(data, filename):
    with open(filename, 'w') as json_file:
        json.dump(data, json_file, indent=4)

bucket_name = 'gdu-data-bucket'
folder_structure = get_object_urls(bucket_name)
save_to_json(folder_structure, 'aws_bucket_objecturl.json')
print("URL saved")