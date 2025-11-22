import { Typewriter } from "@/components/ui/typewriter"

const TypewriterDemo = () => {
  return (
    <div className="w-full min-h-screen bg-background p-8 space-y-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#1A4C7A]">
          Typewriter 組件展示
        </h1>

        {/* 基本用法 */}
        <div className="bg-white rounded-lg p-8 shadow-lg border border-[#3CB1B6]/20 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#1A4C7A]">基本用法</h2>
          <div className="text-xl">
            <Typewriter
              text="歡迎來到中國文化大學行銷學系！"
              speed={100}
              className="text-[#2A7DB1]"
            />
          </div>
        </div>

        {/* 多文字循環 */}
        <div className="bg-white rounded-lg p-8 shadow-lg border border-[#3CB1B6]/20 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#1A4C7A]">多文字循環效果</h2>
          <div className="text-2xl">
            我們培養{" "}
            <Typewriter
              text={[
                "品牌端行銷專才",
                "數據分析專家", 
                "消費心理學家",
                "跨域整合人才"
              ]}
              speed={80}
              className="text-[#3CB1B6] font-bold"
              waitTime={2000}
              deleteSpeed={60}
            />
          </div>
        </div>

        {/* 自定義游標 */}
        <div className="bg-white rounded-lg p-8 shadow-lg border border-[#3CB1B6]/20 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#1A4C7A]">自定義游標</h2>
          <div className="text-xl">
            <Typewriter
              text="專業 × 邏輯 × 數據 × 消費心理"
              speed={120}
              className="text-[#2A7DB1] font-semibold"
              cursorChar="▌"
              cursorClassName="text-[#3CB1B6] ml-1"
            />
          </div>
        </div>

        {/* 無循環模式 */}
        <div className="bg-white rounded-lg p-8 shadow-lg border border-[#3CB1B6]/20 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#1A4C7A]">無循環模式</h2>
          <div className="text-xl">
            <Typewriter
              text={[
                "以現代品牌視野",
                "培養跨域行銷領袖"
              ]}
              speed={100}
              className="text-[#3CB1B6]"
              loop={false}
              waitTime={1500}
            />
          </div>
        </div>

        {/* 延遲開始 */}
        <div className="bg-white rounded-lg p-8 shadow-lg border border-[#3CB1B6]/20 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#1A4C7A]">延遲開始效果</h2>
          <div className="text-xl">
            <span className="text-[#2A7DB1]">準備好了嗎？ </span>
            <Typewriter
              text="讓我們開始你的行銷學習之旅！"
              speed={80}
              initialDelay={2000}
              className="text-[#3CB1B6] font-semibold"
              cursorChar="_"
            />
          </div>
        </div>

        {/* 隱藏游標在打字時 */}
        <div className="bg-white rounded-lg p-8 shadow-lg border border-[#3CB1B6]/20">
          <h2 className="text-2xl font-semibold mb-4 text-[#1A4C7A]">打字時隱藏游標</h2>
          <div className="text-xl">
            <Typewriter
              text={[
                "創新思維",
                "實務應用",
                "國際視野"
              ]}
              speed={150}
              className="text-[#2A7DB1] font-bold"
              hideCursorOnType={true}
              waitTime={2500}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TypewriterDemo