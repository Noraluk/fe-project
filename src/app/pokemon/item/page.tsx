import ItemList from "@/components/pokemon/item/item_list";
import ItemPagination from "@/components/pokemon/item/item_pagination";

export default function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="h-screen mx-40">
      <ItemList page={currentPage} />
      <br />
      <ItemPagination />
    </div>
  );
}

export const dynamic = "force-dynamic";
