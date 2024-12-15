

export default function Home() {
  return (
    <div className="flex">
      <div className="bg-teal-600 min-h-screen w-1/5 m-5">
        sidebar
      </div>
      <div className="m-6 bg-slate-900 w-4/5">
        maincontent
        <h1 className="text-indigo-500 bg-yellow-200 border-b-4 border-heatmap-5">
          Hello World
        </h1>
        <h2 className="text-xs md:text-lg lg:text-2xl">
          content
        </h2>
        <p className="bg-[#012345] text-indigo-50">
          paragraph
        </p>
        <h1 className="text-3xl text-indigo-400underline">Title1</h1>
        <h2 className="text-2xl text-indigo-400">Title2</h2>
        <h3 className="text-xl text-indigo-400 uppercase underline decoration-wavy decoration-indigo-400 decoration-1 underline-offset-4 leading-normal">I am title3</h3>
        <p className="text-xs text-indigo-400">Paragraph text-xs</p>
        <p className="text-lg text-indigo-400 italic">Paragraph text-lg</p>
        <p className="text-sm text-indigo-400 truncate">This is a long sentence with a lot of words to explain that truncate will truncate the text</p>
        <div className="whitespace-normal">
          <p className="text-indigo-400">This is a long sentence with a lot of words</p>
        </div>
        <div className="bg-indigo-400 text-indigo-900 p-4 my-4">Button</div>
        <div className="flex space-x-4 ">
          <div className="bg-indigo-400 p-1 w-1/3">01</div>
          <div className="bg-indigo-400 p-1 w-1/3">02</div>
          <div className="bg-indigo-400 p-1 w-1/3">03</div>
        </div>
      </div>
      
    </div>
  );
}
