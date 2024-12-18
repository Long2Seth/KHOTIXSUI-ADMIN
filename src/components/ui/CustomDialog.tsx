import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

const CustomDialogClose = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Close>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Close> & { canClose: boolean }
>(({ canClose, ...props }, ref) => (
    <DialogPrimitive.Close
        ref={ref}
        {...props}
        onClick={(e) => {
            if (!canClose) {
                e.preventDefault();
                e.stopPropagation();
            }
        }}
    />
));
CustomDialogClose.displayName = DialogPrimitive.Close.displayName;

export { CustomDialogClose };