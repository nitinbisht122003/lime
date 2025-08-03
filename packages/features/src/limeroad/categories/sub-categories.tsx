// "use client";

// import type { Category, SubCategory, SubType } from "@/types/limeroad/categories";
// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import { Log } from "@/components/common/tracking";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger
// } from "@/components/ui/accordion";
// import { Card } from "@/components/ui/card";
// import Tracking from "@/lib/tracking";
// import { EventData } from "@/types/tracking/tracking";
// import { ChevronRightIcon } from "@radix-ui/react-icons";

// import JRLink from "../common/jr-link";
// import BannersCarousel from "./banners-carousel";

// export function SubCategories({ category }: { category: Category }) {
//   // dervied
//   const subCategories = category.sub_categories;
//   const banners = category.banners;

//   return (
//     <div className="border-t border-lime-dark bg-secondary">
//       {/* Banner */}
//       {banners && <BannersCarousel banners={banners} className="pt-0" />}
//       <div className="px-5 py-1.5">
//         {/* subcategories */}
//         <Accordion type="single" collapsible className="w-full">
//           {subCategories.map((subCategory) => (
//             <SubCategoryItem key={subCategory.id} subCategory={subCategory} category={category} />
//           ))}
//         </Accordion>
//       </div>
//     </div>
//   );
// }

// function SubCategoryItem({
//   subCategory,
//   category
// }: {
//   subCategory: SubCategory;
//   category: Category;
// }) {
//   // hooks
//   const itemRef = useRef<HTMLDivElement>(null);
//   const [scrollRef, setScrollRef] = useState<React.RefObject<HTMLDivElement> | null>(null);

//   // effects
//   useEffect(() => {
//     function scrollToTop() {
//       if (!scrollRef?.current) return;

//       scrollRef.current.scrollIntoView({
//         behavior: "smooth",
//         block: "nearest"
//       });
//     }

//     setTimeout(() => {
//       scrollToTop();
//     }, 300);
//   }, [scrollRef]);

//   // data
//   const subCategoryEvent: EventData = {
//     name: "CatBrowseClick",
//     doneOn: { id: category.name, type: "L1", val: category.name },
//     doneFrom: { id: subCategory.name, type: "L2", val: subCategory.name }
//   };

//   // renders

//   if (subCategory.link)
//     return (
//       <JRLink href={subCategory.link}>
//         <Log
//           className="flex flex-1 items-center justify-between py-2.5 text-sm font-medium"
//           events={[
//             {
//               type: "click",
//               data: subCategoryEvent
//             }
//           ]}
//         >
//           <SubCategoryHeader subCategory={subCategory} />
//           <ChevronRightIcon className="h-4 w-4 text-muted-foreground" />
//         </Log>
//       </JRLink>
//     );

//   // actions
//   function handleTriggerClick() {
//     const itemElement = itemRef.current;

//     if (!itemElement) return;

//     const isOpen = itemElement.getAttribute("data-state") === "open";

//     if (isOpen) setScrollRef(null);
//     else setScrollRef(itemRef);

//     Tracking.sendEvent(subCategoryEvent).catch((error) => {
//       console.error("Error sending event", error);
//     });
//   }

//   return (
//     <AccordionItem ref={itemRef} value={`${subCategory.id}`} className="border-none">
//       <AccordionTrigger onClick={handleTriggerClick} className="py-2.5">
//         <SubCategoryHeader subCategory={subCategory} />
//       </AccordionTrigger>
//       <AccordionContent>
//         <SubTypes subTypes={subCategory.types} subCategory={subCategory} />
//       </AccordionContent>
//     </AccordionItem>
//   );
// }

// function SubCategoryHeader({ subCategory }: { subCategory: SubCategory }) {
//   return (
//     <div className="flex items-center gap-2.5">
//       <Image
//         src={subCategory.image}
//         alt={subCategory.name}
//         width={42}
//         height={52}
//         className="aspect-[42/52] w-[2.63rem] object-cover"
//       />
//       <div className="text-xs font-medium capitalize leading-4">
//         {subCategory.name.toLowerCase()}
//       </div>
//     </div>
//   );
// }

// function SubTypes({ subTypes, subCategory }: { subTypes: SubType[]; subCategory: SubCategory }) {
//   return (
//     <Card className="grid grid-cols-3 gap-3 p-3">
//       {subTypes.map((subType) => (
//         <SubTypeCard key={subType.id} subType={subType} subCategory={subCategory} />
//       ))}
//     </Card>
//   );
// }

// function SubTypeCard({ subType, subCategory }: { subType: SubType; subCategory: SubCategory }) {
//   return (
//     <Log
//       events={[
//         {
//           type: "click",
//           data: {
//             name: "CatBrowseClick",
//             doneOn: { id: subCategory.name, type: "L2", val: subCategory.name },
//             doneFrom: { id: subType.name, type: "L3", val: subType.name }
//           }
//         }
//       ]}
//     >
//       <JRLink href={subType.link}>
//         <div className="relative aspect-[242/305] overflow-hidden rounded-lg bg-secondary">
//           <Image
//             src={subType.image}
//             alt={subType.name}
//             width={121}
//             height={152}
//             className="absolute h-full w-full object-contain"
//           />
//         </div>
//         <div className="p-2 text-center text-xs font-medium capitalize leading-3 text-foreground-dark">
//           {subType.name.toLowerCase()}
//         </div>
//       </JRLink>
//     </Log>
//   );
// }
