import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, AlertTriangle, Info, Clock, Download, ExternalLink, Home, Bell, Eye, Share2, ChevronRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import SEOHead from "@/components/SEOHead";
import { apiConfig } from "../lib/api";

interface AnnouncementDetail {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  priority?: string;
  type?: string;
  isSticky?: boolean;
  views?: number;
  attachments?: string[];
  deadline?: string;
}

const AnnouncementDetail = () => {
  const { id } = useParams();
  const [announcement, setAnnouncement] = useState<AnnouncementDetail | null>(null);
  const [relatedAnnouncements, setRelatedAnnouncements] = useState<AnnouncementDetail[]>([]);
  const [loading, setLoading] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        setLoading(true);
        
        // 並行獲取公告詳細內容和相關公告
        const [announcementResponse, relatedResponse] = await Promise.all([
          fetch(`${apiConfig.baseURL}/api/content/${id}`),
          fetch(`${apiConfig.baseURL}/api/content/${id}/related`)
        ]);

        if (announcementResponse.ok) {
          const announcementData = await announcementResponse.json();
          setAnnouncement(announcementData);
        } else {
          throw new Error('公告不存在');
        }

        if (relatedResponse.ok) {
          const relatedData = await relatedResponse.json();
          setRelatedAnnouncements(relatedData);
        }
      } catch (error) {
        console.error('獲取公告失敗:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchAnnouncement();
    }
  }, [id]);

  const getPriorityStyle = (priority?: string) => {
    switch (priority) {
      case 'high':
        return { 
          bg: 'bg-gradient-to-r from-red-500 to-orange-500', 
          text: 'text-white', 
          border: 'border-red-300',
          glow: 'shadow-red-200'
        };
      case 'normal':
        return { 
          bg: 'bg-gradient-to-r from-blue-500 to-blue-600', 
          text: 'text-white', 
          border: 'border-blue-300',
          glow: 'shadow-blue-200'
        };
      case 'low':
        return { 
          bg: 'bg-gradient-to-r from-gray-500 to-gray-600', 
          text: 'text-white', 
          border: 'border-gray-300',
          glow: 'shadow-gray-200'
        };
      default:
        return { 
          bg: 'bg-gradient-to-r from-blue-500 to-blue-600', 
          text: 'text-white', 
          border: 'border-blue-300',
          glow: 'shadow-blue-200'
        };
    }
  };

  const getPriorityIcon = (priority?: string) => {
    switch (priority) {
      case 'high':
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <Info className="w-4 h-4" />;
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: announcement?.title,
          text: announcement?.content?.substring(0, 100) + '...',
          url: window.location.href,
        });
      } catch (error) {
        console.log('分享取消');
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert('🔗 連結已複製到剪貼簿！');
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600 mx-auto"></div>
            <div className="absolute inset-0 rounded-full bg-blue-100 opacity-20 animate-pulse"></div>
          </div>
          <div className="space-y-2">
            <p className="text-blue-600 font-medium">載入重要公告中...</p>
            <div className="flex justify-center space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!announcement) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="text-6xl">📋</div>
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-800">公告不存在</h2>
            <p className="text-gray-600">您查找的公告可能已被移除或不存在</p>
          </div>
          <Link to="/">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回首頁
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const priorityStyle = getPriorityStyle(announcement.priority);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SEOHead 
        title={`${announcement.title} - 文化大學行銷學系公告`}
        description={announcement.content.substring(0, 160)}
        keywords={`行銷系公告,${announcement.category},系務通知`}
        url={window.location.href}
        type="article"
      />
      
      {/* 頂部導航區 */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
        <div className="container max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" className="hover:bg-blue-50 text-blue-700 transition-all duration-300">
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回首頁
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <Button
                onClick={handleBookmark}
                variant="ghost"
                className={`transition-all duration-300 ${isBookmarked ? 'text-yellow-500 hover:bg-yellow-50' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                <Bell className={`w-4 h-4 mr-1 ${isBookmarked ? 'fill-current' : ''}`} />
                {isBookmarked ? '已關注' : '關注'}
              </Button>
              <Button onClick={handleShare} variant="ghost" className="hover:bg-blue-50 text-blue-600">
                <Share2 className="w-4 h-4 mr-1" />
                分享
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 公告主體 */}
      <article className="container max-w-4xl mx-auto px-4 py-8">
        {/* 公告標頭 */}
        <Card className="mb-6 bg-white/95 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
          <CardHeader className="pb-6 bg-gradient-to-r from-blue-50 to-indigo-50">
            {/* 官方標識 */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-gray-800">文化大學行銷學系</span>
                <p className="text-sm text-gray-600">官方公告系統</p>
              </div>
            </div>

            {/* 優先級與置頂標識 */}
            <div className="flex items-center gap-3 mb-6">
              <Badge className={`${priorityStyle.bg} ${priorityStyle.text} px-4 py-2 rounded-full font-medium shadow-lg ${priorityStyle.glow} flex items-center gap-2`}>
                {getPriorityIcon(announcement.priority)}
                {announcement.priority === 'high' ? '重要公告' : '一般公告'}
              </Badge>
              {announcement.isSticky && (
                <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full font-medium shadow-lg animate-pulse">
                  📌 置頂
                </Badge>
              )}
              <Badge variant="outline" className="text-blue-700 border-blue-200 bg-blue-50 px-3 py-1 rounded-full">
                {announcement.category}
              </Badge>
            </div>

            {/* 公告標題 */}
            <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {announcement.title}
            </CardTitle>

            {/* 統計資訊 */}
            <div className="flex items-center gap-6 mt-4 text-sm text-gray-600">
              <span className="flex items-center gap-2 bg-white/70 px-3 py-1 rounded-full">
                <Eye className="w-4 h-4 text-blue-500" />
                {announcement.views || 0} 人已讀
              </span>
              <span className="flex items-center gap-2 bg-white/70 px-3 py-1 rounded-full">
                <Calendar className="w-4 h-4 text-green-500" />
                {new Date(announcement.date).toLocaleDateString('zh-TW')}
              </span>
            </div>
          </CardHeader>
        </Card>

        {/* 重要提醒（高優先級時顯示） */}
        {announcement.priority === 'high' && (
          <Alert className="mb-6 border-red-300 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl shadow-lg">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <AlertDescription className="text-red-800 font-medium ml-2">
              ⚠️ 這是一則重要公告，請同學們務必詳細閱讀並遵照辦理。
            </AlertDescription>
          </Alert>
        )}

        {/* 公告詳細內容 */}
        <Card className="mb-6 bg-white/95 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
          <CardContent className="p-8 md:p-12">
            {/* 發布資訊 */}
            <div className="flex items-center gap-4 mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                {announcement.author.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="font-bold text-xl text-gray-900">{announcement.author}</div>
                <div className="flex items-center gap-2 text-gray-600 mt-1">
                  <Calendar className="w-4 h-4" />
                  <span>發布於 {new Date(announcement.date).toLocaleDateString('zh-TW', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{announcement.views || 0}</div>
                  <div className="text-xs text-gray-500">閱讀人數</div>
                </div>
              </div>
            </div>

            {/* 截止日期（如有） */}
            {announcement.deadline && (
              <Alert className="mb-8 border-orange-300 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl shadow-lg">
                <Clock className="h-5 w-5 text-orange-600" />
                <AlertDescription className="text-orange-800 font-medium ml-2">
                  <strong>⏰ 辦理期限：</strong>{announcement.deadline}
                </AlertDescription>
              </Alert>
            )}

            {/* 公告內容 */}
            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-6">
              {announcement.content.split('\n').map((paragraph, index) => (
                <p key={index} className="text-lg leading-8 first-letter:text-3xl first-letter:font-bold first-letter:text-blue-600 first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* 附件下載（如有） */}
            {announcement.attachments && announcement.attachments.length > 0 && (
              <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-lg">
                  <Download className="w-5 h-5 text-blue-600" />
                  相關附件下載
                </h4>
                <div className="space-y-3">
                  {announcement.attachments.map((attachment, index) => (
                    <a 
                      key={index}
                      href={attachment}
                      className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <ExternalLink className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">附件 {index + 1}</div>
                        <div className="text-sm text-gray-500">點擊下載或開啟</div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* 公告底部行動區 */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button
                    onClick={handleBookmark}
                    className={`transition-all duration-300 rounded-full px-6 py-3 ${
                      isBookmarked 
                        ? 'bg-yellow-500 hover:bg-yellow-600 text-white' 
                        : 'bg-gray-100 hover:bg-yellow-50 text-gray-700 hover:text-yellow-600'
                    }`}
                  >
                    <Bell className={`w-5 h-5 mr-2 ${isBookmarked ? 'fill-current' : ''}`} />
                    {isBookmarked ? '已關注此公告' : '關注重要更新'}
                  </Button>
                </div>
                <Button 
                  onClick={handleShare}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  分享公告
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 相關公告 */}
        {relatedAnnouncements.length > 0 && (
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50">
              <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <Info className="w-5 h-5 text-white" />
                </div>
                其他相關公告
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4">
                {relatedAnnouncements.map((related) => (
                  <Link key={related.id} to={`/announcement/${related.id}`} className="group">
                    <div className="p-6 border border-gray-200 rounded-2xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 cursor-pointer group-hover:shadow-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <Badge variant="outline" className="text-xs bg-gray-50">
                              {related.category}
                            </Badge>
                            {related.priority === 'high' && (
                              <Badge className="bg-red-100 text-red-800 text-xs px-2 py-1">
                                重要
                              </Badge>
                            )}
                            {related.isSticky && (
                              <Badge className="bg-blue-100 text-blue-800 text-xs px-2 py-1">
                                置頂
                              </Badge>
                            )}
                          </div>
                          <h5 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                            {related.title}
                          </h5>
                          <p className="text-gray-600 line-clamp-2 leading-relaxed">
                            {related.content.substring(0, 100)}...
                          </p>
                        </div>
                        <div className="text-right ml-4">
                          <div className="text-xs text-gray-500 mb-2">
                            {new Date(related.date).toLocaleDateString('zh-TW')}
                          </div>
                          <div className="flex items-center gap-1 text-blue-600 group-hover:text-blue-700">
                            <span className="text-xs">查看詳情</span>
                            <ChevronRight className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </article>
    </div>
  );
};

export default AnnouncementDetail; 