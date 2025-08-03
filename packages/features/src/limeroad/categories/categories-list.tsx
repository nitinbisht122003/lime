// "use client";

// import React, { useCallback, useEffect, useRef, useState } from "react";

// import type { Category } from "@app/types/limeroad";
// import { sliceArray } from "@app/core/utils";
// import { TriangleIcon } from "@app/ui/icons";

// import { Log } from "../../common/tracking";
// import { SubCategories } from "./sub-categories";

// type CategoryRef = React.RefObject<HTMLDivElement | null>;

// export function CategoriesList({ categories }: { categories: Category[] }) {
//   // hooks
//   const [selectedCategory, setSelectedCategory] = useState<Category>();
//   const [selectedRowIdx, setSelectedRowIdx] = useState<number>();
//   const [selectedCategoryRef, setSelectedCategoryRef] = useState<CategoryRef | null>(null);

//   useEffect(() => {
//     if (selectedCategoryRef?.current) {
//       selectedCategoryRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   }, [selectedCategoryRef]);

//   // derived
//   const slicedCategories = sliceArray(categories, 3);

//   // actions
//   const handleCategoryClick = useCallback(
//     (category: Category, ref: CategoryRef, rowIdx: number) => {
//       if (selectedCategory?.id === category.id) {
//         setSelectedCategory(undefined);
//         setSelectedRowIdx(undefined);
//         setSelectedCategoryRef(null);
//       } else {
//         setSelectedCategory(category);
//         setSelectedRowIdx(rowIdx);
//         setSelectedCategoryRef(ref);
//       }
//     },
//     [selectedCategory]
//   );

//   return (
//     <div style={styles.container}>
//       {slicedCategories.map((row, index) => (
//         <div key={index} style={styles.row}>
//           {/* categories */}
//           <div style={styles.categoriesGrid}>
//             {row.map((category) => {
//               const selected = selectedCategory?.id === category.id;

//               return (
//                 <Log
//                   key={category.id}
//                   style={[styles.categoryCardCtr, selected && styles.selectedCardCtr]}
//                   events={[
//                     {
//                       type: "click",
//                       data: {
//                         name: "CatBrowseClick",
//                         doneFrom: { id: category.name, type: "L1", val: category.name }
//                       }
//                     }
//                   ]}
//                 >
//                   <CategoryCard
//                     category={category}
//                     selected={selected}
//                     rowIdx={index}
//                     onClick={handleCategoryClick}
//                   />
//                   {selected && (
//                     <div style={styles.triangleIconCtr}>
//                       <TriangleIcon
//                         base={18}
//                         height={6}
//                         leftBorderProps={{ stroke: colors.secondary, strokeWidth: 0.5 }}
//                         rightBorderProps={{ stroke: colors.secondary, strokeWidth: 0.5 }}
//                         bottomBorderProps={{ strokeWidth: 0 }}
//                       />
//                     </div>
//                   )}
//                 </Log>
//               );
//             })}
//           </div>
//           {/* subcategories */}
//           {/* {selectedCategory && selectedRowIdx === index && (
//             <SubCategories category={selectedCategory} />
//           )} */}
//         </div>
//       ))}
//     </div>
//   );
// }

// function CategoryCard({
//   category,
//   selected,
//   rowIdx,
//   onClick
// }: {
//   category: Category;
//   selected: boolean;
//   rowIdx: number;
//   onClick: (category: Category, ref: CategoryRef, rowIdx: number) => void;
// }) {
//   const ref: CategoryRef = useRef<HTMLDivElement>(null);

//   return (
//     <Card
//       ref={ref}
//       style={[styles.categoryCard, selected && styles.selectedCategoryCard]}
//       onClick={() => {
//         onClick(category, ref, rowIdx);
//       }}
//     >
//       <div style={styles.categoryLabel}>
//         <span style={styles.categoryText}>{category.name.toLowerCase()}</span>
//         {/* ChevronDownIcon would need to be implemented as an SVG component */}
//         <div />
//       </div>
//       <img
//         src={category.image}
//         alt={category.name}
//         width={200}
//         height={200}
//         // priority={rowIdx <= 4}
//         style={styles.categoryImage}
//       />
//     </Card>
//   );
// }
