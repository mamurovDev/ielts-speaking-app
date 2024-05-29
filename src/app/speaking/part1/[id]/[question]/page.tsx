import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export default function Page() {
    return (
        <Tabs defaultValue="vocabulary" className="w-[500px]">
            <TabsList className="grid w-full grid-cols-3 bg-main">
                <TabsTrigger value="vocabulary" className="">Vocabulary</TabsTrigger>
                <TabsTrigger value="ideas">Ideas</TabsTrigger>
                <TabsTrigger value="answer">Answer</TabsTrigger>
            </TabsList>
            <TabsContent value="vocabulary" >
                <Card className="bg-main border-none">
                    <CardHeader>
                        <CardTitle className="text-white">Vocabulary</CardTitle>
                        <CardDescription className="text-stone-400" >
                            Here you can get some vocabulary to help you with your answer.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <ul>
                            <li>First word</li>
                            <li>Second word</li>
                            <li>Third word</li>

                        </ul>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="ideas">
                <Card>
                    <CardHeader>
                        <CardTitle>Ideas</CardTitle>
                        <CardDescription>
                            Here you can get some ideas to help you with your answer.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <ul>
                            <li>First idea</li>
                            <li>Second idea</li>
                            <li>Third idea</li>
                        </ul>
                    </CardContent>

                </Card>
            </TabsContent>
            <TabsContent value="answer">
                <Card>
                    <CardHeader>
                        <CardTitle>Answer</CardTitle>
                        <CardDescription>
                            Here you can read a sample aswer.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat recusandae error reprehenderit obcaecati iste delectus maiores illum perferendis laudantium voluptatibus blanditiis nisi neque hic, beatae ab eius nostrum nulla nesciunt?</li>

                        </ul>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
