

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-teal-600 md:min-h-screen basis-1/5">
        sidebar
      </div>
      <div className=" bg-slate-900 basis-4/5 flex flex-col">
        <div className="bg-slate-300">
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
        </div>
      </div>
    </div>
  );
}
