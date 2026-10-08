"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "~/lib/utils";
import { FaCircleChevronDown } from "react-icons/fa6";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    /**
     * Radix renders the accordion header as an h3. Where an accordion sits
     * directly under the page h1, that skips a level for screen readers, so
     * the consumer can set the correct level for its position in the document.
     */
    headingLevel?: 2 | 3 | 4;
  }
>(({ className, children, headingLevel = 3, ...props }, ref) => (
  <AccordionPrimitive.Header asChild>
    {React.createElement(
      `h${headingLevel}`,
      { className: "flex" },
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center gap-2 py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      <FaCircleChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      {children}
    </AccordionPrimitive.Trigger>,
    )}
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
