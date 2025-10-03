import { cn } from "@/lib/utils";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export default function PostCard({title, description, readTime, category, horizontal, className}: any){
    return <Card className={`p-4 ${cn(className, horizontal ? 'grid grid-cols-2 ' : '')}`}>
        <CardHeader className={`p-0`}>
            <img 
            src="default-image.jpg" 
            className="rounded-md h-full row-span-full"/>
        </CardHeader>

        <div className="h-full flex flex-col justify-between">
            <div className="flex-1 flex flex-col justify-center">
                <CardTitle className="font-medium text-2xl tracking-tight">
                {title}
                </CardTitle>

                <CardDescription className="text-base mt-2">
                {description}
                </CardDescription>
            </div>

            <CardFooter className="p-0 mt-4 flex justify-between w-full flex-none">
                    <span className="flex items-center gap-2">
                        <div className="w-[10px] h-[10px] bg-orange-500 rounded-full"></div>
                        {readTime}
                    </span>
                    <Badge>{category}</Badge>
            </CardFooter>
        </div>
    </Card>
}