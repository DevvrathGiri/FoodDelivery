import ItemList from "./ItemList";

interface CategoryProps {
  data: any;
  showItems: boolean;
  setShowIndex: () => void;
}

const RestaurantCategory = ({ data, showItems, setShowIndex }: CategoryProps) => {
  return (
   <div className="
  w-full 
  sm:w-11/12 
  md:w-10/12 
  lg:w-9/12 
  xl:w-8/12 
  mx-auto 
  my-4 
  bg-white 
  shadow-md 
  rounded-xl 
  p-4
">

      <div
        className="flex justify-between cursor-pointer items-center"
        onClick={setShowIndex}
      >
        <span className="font-bold text-lg">
          {data?.title} ({data?.itemCards?.length})
        </span>
        <span className={`transform transition-transform ${showItems ? "rotate-180" : ""}`}>
          ⬇️
        </span>
      </div>

      {showItems && (
        <div className="mt-4">
          <ItemList items={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
