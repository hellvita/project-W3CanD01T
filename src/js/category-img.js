import all_1 from '/img/furniture/furniture-categories/all-products.webp';
import all_2 from '/img/furniture/furniture-categories/all-products@2x.webp';
import hallway_1 from '/img/furniture/furniture-categories/hallway-furniture.webp';
import hallway_2 from '/img/furniture/furniture-categories/hallway-furniture@2x.webp';
import kitchens_1 from '/img/furniture/furniture-categories/kitchens.webp';
import kitchens_2 from '/img/furniture/furniture-categories/kitchens@2x.webp';
import garden_1 from '/img/furniture/furniture-categories/garden-furniture.webp';
import garden_2 from '/img/furniture/furniture-categories/garden-furniture@2x.webp';
import tables_1 from '/img/furniture/furniture-categories/tables.webp';
import tables_2 from '/img/furniture/furniture-categories/tables@2x.webp';
import upholstered_1 from '/img/furniture/furniture-categories/upholstered-furniture.webp';
import upholstered_2 from '/img/furniture/furniture-categories/upholstered-furniture@2x.webp';
import nursery_1 from '/img/furniture/furniture-categories/furniture-nursery.webp';
import nursery_2 from '/img/furniture/furniture-categories/furniture-nursery@2x.webp';
import decor_1 from '/img/furniture/furniture-categories/decor-accessories.webp';
import decor_2 from '/img/furniture/furniture-categories/decor-accessories@2x.webp';
import bathroom_1 from '/img/furniture/furniture-categories/bathroom-furniture.webp';
import bathroom_2 from '/img/furniture/furniture-categories/bathroom-furniture@2x.webp';
import office_1 from '/img/furniture/furniture-categories/office-furniture.webp';
import office_2 from '/img/furniture/furniture-categories/office-furniture@2x.webp';
import storage_1 from '/img/furniture/furniture-categories/cabinets-storage-systems.webp';
import storage_2 from '/img/furniture/furniture-categories/cabinets-storage-systems@2x.webp';
import beds_1 from '/img/furniture/furniture-categories/beds-mattresses.webp';
import beds_2 from '/img/furniture/furniture-categories/beds-mattresses@2x.webp';
import chairs_1 from '/img/furniture/furniture-categories/chairs-stools.webp';
import chairs_2 from '/img/furniture/furniture-categories/chairs-stools@2x.webp';

export function getCategoriesImages(categories) {
  const images = {
    [categories[0].name]: { one: all_1, two: all_2 },
    [categories[1].name]: { one: hallway_1, two: hallway_2 },
    [categories[2].name]: { one: kitchens_1, two: kitchens_2 },
    [categories[3].name]: { one: garden_1, two: garden_2 },
    [categories[4].name]: { one: tables_1, two: tables_2 },
    [categories[5].name]: { one: upholstered_1, two: upholstered_2 },
    [categories[6].name]: { one: nursery_1, two: nursery_2 },
    [categories[7].name]: { one: decor_1, two: decor_2 },
    [categories[8].name]: { one: bathroom_1, two: bathroom_2 },
    [categories[9].name]: { one: office_1, two: office_2 },
    [categories[10].name]: { one: storage_1, two: storage_2 },
    [categories[11].name]: { one: beds_1, two: beds_2 },
    [categories[12].name]: { one: chairs_1, two: chairs_2 },
  };

  return images;
}

// const images = {
//   [categories[0].name]: 'all-products',
//   [categories[1].name]: 'hallway-furniture',
//   [categories[2].name]: 'kitchens',
//   [categories[3].name]: 'garden-furniture',
//   [categories[4].name]: 'tables',
//   [categories[5].name]: 'upholstered-furniture',
//   [categories[6].name]: 'furniture-nursery',
//   [categories[7].name]: 'decor-accessories',
//   [categories[8].name]: 'bathroom-furniture',
//   [categories[9].name]: 'office-furniture',
//   [categories[10].name]: 'cabinets-storage-systems',
//   [categories[11].name]: 'beds-mattresses',
//   [categories[12].name]: 'chairs-stools',
// };
