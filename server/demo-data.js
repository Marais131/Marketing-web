// 演示數據 - 用於展示管理後台功能

const demoContent = [
  {
    id: 1,
    type: 'news',
    title: '🎉 2024年行銷系招生開始！',
    content: '歡迎對行銷有興趣的同學加入我們！文化大學行銷系提供完整的品牌行銷教育，結合理論與實務，培養新世代行銷專業人才。我們的課程涵蓋品牌策略、數位行銷、消費者心理學、市場研究等核心領域。',
    category: '招生資訊',
    date: '2024-01-15',
    views: 156,
    status: 'published',
    images: []
  },
  {
    id: 2,
    type: 'event',
    title: '📚 品牌策略工作坊',
    content: '邀請業界專家分享品牌建立經驗，透過實際案例分析，讓同學了解品牌策略的核心要素。工作坊將涵蓋品牌定位、品牌識別、品牌傳播等重要主題，並提供實作練習機會。',
    category: '活動',
    date: '2024-01-10',
    views: 89,
    status: 'published',
    images: []
  },
  {
    id: 3,
    type: 'news',
    title: '🏆 學生獲得全國行銷競賽冠軍',
    content: '恭喜本系學生團隊在2024全國大專院校行銷企劃競賽中榮獲冠軍！他們的創新品牌策略獲得評審一致好評，展現了文化行銷系學生的專業實力與創意思維。',
    category: '競賽成果',
    date: '2024-01-08',
    views: 234,
    status: 'published',
    images: []
  },
  {
    id: 4,
    type: 'notice',
    title: '📢 期末考試時程公告',
    content: '2024年第一學期期末考試時程已公布，請同學們注意考試時間與地點。考試範圍包含整學期授課內容，建議提早準備。如有任何問題，請洽詢系辦公室。',
    category: '一般公告',
    date: '2024-01-05',
    views: 67,
    status: 'published',
    images: []
  },
  {
    id: 5,
    type: 'event',
    title: '💼 企業實習說明會',
    content: '為了讓同學們更了解實習機會，特別舉辦企業實習說明會。將邀請多家知名企業HR分享實習職缺與申請流程，並提供履歷撰寫與面試技巧指導。',
    category: '實習',
    date: '2024-01-03',
    views: 145,
    status: 'published',
    images: []
  }
];

const demoStats = {
  totalPosts: demoContent.length,
  totalViews: demoContent.reduce((sum, item) => sum + item.views, 0),
  todayViews: 1234,
  activeUsers: 45
};

module.exports = {
  demoContent,
  demoStats
}; 