import useFetch from "../hooks/useFetch"

export default function CategoriesList(){
    const { data: categories} = useFetch("https://gist.githubusercontent.com/Mungis96/ccd35381008f3ac4f024db72f3de3b7a/raw/87e26fa297ca84f6a3aceb397690f1c4f344756e/categories.json")
    return(
        <div className="Categories-list">Kategorijos</div>
    )
}