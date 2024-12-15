

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-teal-600 md:min-h-screen basis-1/5">
        sidebar
      </div>
      <div className=" bg-slate-900 basis-4/5 flex flex-col">
        <div className="bg-slate-300 w-full fixed">
          topbar
        </div>
        <div className="m-6">
          <h1 className="text-indigo-500 bg-yellow-200 border-b-4 border-heatmap-5">
            Hello World
          </h1>
          <h2 className="text-xs md:text-lg lg:text-2xl">
            content
          </h2>
          <p className="bg-[#012345] text-indigo-50">
            paragraph
          </p>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl text-indigo-400underline">Title1</h1>
            <h2 className="text-2xl text-indigo-400">Title2</h2>
            <h3 className="text-xl text-indigo-400 uppercase underline decoration-wavy decoration-indigo-400 decoration-1 underline-offset-4 leading-normal">I am title3</h3>
            <p className="text-xs text-indigo-400">Paragraph text-xs</p>
            <p className="text-lg text-indigo-400 italic">Paragraph text-lg</p>
            <p className="text-sm text-indigo-400 truncate">This is a long sentence with a lot of words to explain that truncate will truncate the text</p>
            <div className="whitespace-normal">
              <p className="text-indigo-400">This is a long sentence with a lot of words</p>
            </div>
          </div>
          
          <div className="bg-indigo-400 text-indigo-900 p-4 my-4">Button</div>
          <div className="flex space-x-4 ">
            <div className="bg-indigo-400 p-1 w-1/3">01</div>
            <div className="bg-indigo-400 p-1 w-1/3">02</div>
            <div className="bg-indigo-400 p-1 w-1/3">03</div>
          </div>
          <div className="flex mt-4 space-x-1">
            <div className="bg-indigo-600 p-1 flex-grow">01</div>
            <div className="bg-indigo-600 p-1 ">02</div>
            <div className="bg-indigo-600 p-1 ">03</div>
          </div>
          <div className="flex-col mt-4 space-y-1">
            <div className="bg-indigo-600 p-1">01</div>
            <div className="bg-indigo-500 p-1 ">02</div>
            <div className="bg-indigo-600 p-1 ">03</div>
          </div>
          <div className="grid col-auto md:grid-cols-4 gap-1 mt-4">
            <div className="bg-indigo-600 p-1 rounded-lg">01</div>
            <div className="bg-indigo-500 p-1 rounded-lg">02</div>
            <div className="bg-indigo-600 p-1 rounded-lg">03</div>
            <div className="bg-indigo-500 p-1 rounded-lg">04</div>
            <div className="bg-indigo-600 p-1 rounded-lg">05</div>
            <div className="bg-indigo-500 p-1 rounded-lg">06</div>
            <div className="bg-indigo-600 p-1 rounded-lg">07</div>
            <div className="bg-indigo-500 p-1 rounded-lg">08</div>
            <div className="bg-indigo-600 p-1 rounded-lg">09</div>
          </div>
          <div className="grid grid-cols-3 gap-1 mt-4">
            <div className="bg-indigo-600 p-1 rounded-lg col-start-2">01</div>
            <div className="bg-indigo-500 p-1 rounded-lg">02</div>
            <div className="bg-indigo-600 p-1 rounded-lg">03</div>
            <div className="bg-indigo-500 p-1 rounded-lg col-span-2">04</div>
            <div className="bg-indigo-600 p-1 rounded-lg">05</div>
            <div className="bg-indigo-500 p-1 rounded-lg col-start-1 col-end-3">06</div>
            <div className="bg-indigo-600 p-1 rounded-lg">07</div>
          </div>
          <div className="grid grid-cols-5 gap-1 mt-4">
            <div className="bg-indigo-600 p-1 rounded-lg row-span-2">01</div>
            <div className="bg-indigo-500 p-1 rounded-lg">02</div>
            <div className="bg-indigo-600 p-1 rounded-lg">03</div>
            <div className="bg-indigo-500 p-1 rounded-lg row-span-3">04</div>
            <div className="bg-indigo-600 p-1 rounded-lg row-span-2">05</div>
            <div className="bg-indigo-500 p-1 rounded-lg">06</div>
            <div className="bg-indigo-600 p-1 rounded-lg row-span-2">07</div>
            <div className="bg-indigo-500 p-1 rounded-lg">08</div>
            <div className="bg-indigo-600 p-1 rounded-lg">09</div>
          </div>
          <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-1 mt-4">
            <div className="bg-indigo-600 p-1 rounded-lg col-span-2">01</div>
            <div className="bg-indigo-500 p-1 rounded-lg col-span-2">02</div>
            <div className="bg-indigo-600 p-1 rounded-lg">03</div>
            <div className="bg-indigo-500 p-1 rounded-lg">04</div>
            <div className="bg-indigo-600 p-1 rounded-lg">05</div>
            <div className="bg-indigo-500 p-1 rounded-lg col-span-2">06</div>
            <div className="bg-indigo-600 p-1 rounded-lg">07</div>
            <div className="bg-indigo-500 p-1 rounded-lg">08</div>
            <div className="bg-indigo-600 p-1 rounded-lg">09</div>
          </div>
        </div>
        <div className="container bg-indigo-800 p-4 columns-3">
            <img 
              src="https://picsum.photos/200/300" 
              alt="random" 
              className="w-64 float-none" 
            />
            <img 
              src="https://picsum.photos/200/300" 
              alt="random" 
              className="w-64 float-none" 
            />
            <p className="bg-indigo-300">I am 1</p>
            <p className="bg-indigo-300">I am 2</p>
            <p className="bg-indigo-300">I am 3</p>
            <p className="bg-indigo-300">I am 4</p>
            <p className="bg-indigo-300">I am 5</p>
        </div>
        <div className="grid grid-cols-3 gap-4 p-4">
          <div className="bg-indigo-300">01</div>
          <div className="invisible ...">02</div>
          <div className="bg-indigo-300">03</div>
        </div>
        <div className="container flex p-4 -space-x-1">
          <div className="bg-indigo-300 p-2 size-10 rounded-full border-2 border-indigo-100 z-0">A</div>
          <div className="bg-indigo-400 p-2 size-10 rounded-full border-2 border-indigo-100 z-10">B</div>
          <div className="bg-indigo-500 p-2 size-10 rounded-full border-2 border-indigo-100 z-20">C</div>
        </div>
      </div>
    </div>
  );
}
