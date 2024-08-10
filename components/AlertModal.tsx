"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {useState} from "react";


const AlertModal = ({dialogTitle, dialogContent}: { dialogTitle: string, dialogContent: string }) => {
    const [isOpenDialog, setIsOpenDialog] = useState(true);

    function continueHandler() {
        setIsOpenDialog(false);
    }

    return (<AlertDialog open={isOpenDialog}>
            <AlertDialogTrigger asChild>Open</AlertDialogTrigger>
            <AlertDialogContent className="shad-dialog">
                <AlertDialogHeader>
                    <AlertDialogTitle>{dialogTitle}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {dialogContent}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction className="shad-primary-btn"
                                       onClick={continueHandler}>CLOSE</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default AlertModal;

