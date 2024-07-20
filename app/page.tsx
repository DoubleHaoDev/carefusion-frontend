import Image from "next/image";
import {Button} from "@/components/ui/button";

export default function Home() {
    return (
        <div>
            <h1 className="text-3xl underline text-white">Home</h1>
            <Button>Click</Button>
        </div>
    );
}