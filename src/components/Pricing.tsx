import React from 'react'
import { Container, Wrapper } from '.'
import SectionBadge from './ui/section-badge'
import { pricingCards } from '@/constants'
import { Card,CardContent,CardDescription, CardTitle,CardFooter,CardHeader} from "@/components/ui/card";
import { Zap } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const Pricing = () => {
  return (
    <Wrapper className="flex flex-col items-center justify-center py-12 relative">
            <div className="hidden lg:block absolute -top-1/3 -right-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
            <div className="hidden lg:block absolute bottom-0 -left-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

                <Container>
                <div className="max-w-md mx-auto text-start md:text-center" >
                        <SectionBadge title='Pricing' />
                        <h2 className="text-3xl lg:text-4xl mt-6 font-semibold">
                        Unlock the right plan for your business
                        </h2>
                        <p className="text-muted-foreground mt-6">
                        Choose the best plan for your business and start building your dream website today
                        </p>
                    </div>
                </Container>
                <Container className="flex items-center justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 py-10 md:py-20 flex-wrap max-w-4xl ">
                        {pricingCards.map((card)=>(
                            <Card 
                            className={cn("flex flex-col w-full border-neutral-700",
                            card.title==="Unlimited Saas"&&"border-primary border-2"
                            )}
                            key={card.title}
                            >
                                <CardHeader className="border-2 border-border ">
                                    <span>
                                        {card.title}
                                    </span>
                                    <CardTitle className={cn(card.title!== "Unlimited Saas"&&"text-muted-foreground")}>
                                        {card.price}
                                    </CardTitle>
                                    <CardDescription>
                                        {card.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="pt-6 space-y-3">
                                    {card.features.map((feature)=>(
                                        <div key={feature} className="flex items-center gap-2">
                                            <Zap className="w-4 h-4 fill-primary text-primary " />
                                            <p className="">{feature}</p>
                                        </div>
                                    ))}
                                </CardContent>
                                <CardFooter className="mt-auto w-full">
                                    <Link href='/' className={cn("w-full text-center text-primary-foreground bg-primary p-2 rounded-md text-sm font-medium",card.title!=='Unlimited Saas'&& "!bg-foreground !text-background")}>
                                    {card.buttonText}
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Wrapper>
  )
}

export default Pricing