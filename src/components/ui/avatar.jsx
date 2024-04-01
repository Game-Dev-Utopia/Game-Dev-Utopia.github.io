"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"
import { PiMedalFill } from "react-icons/pi"

const Avatar = React.forwardRef(({ medalColor, className, ...props }, ref) => (
  <>
    <PiMedalFill className="relative -top-[0.8rem] -right-[4.2rem] z-20" color={medalColor} size={30} />
    <AvatarPrimitive.Root
      ref={ref}
      className={cn("relative h-12 w-12 shrink-0 overflow-hidden rounded-full", className)}
      {...props} />
  </>
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props} />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800",
      className
    )}
    {...props} />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
