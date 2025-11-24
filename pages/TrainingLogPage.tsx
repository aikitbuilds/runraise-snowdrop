import React, { useState } from 'react';
import { MOCK_LOGS } from '../constants';
import { Calendar, Clock, MapPin, Activity, Quote, Share2, MessageSquare, Send } from 'lucide-react';
import ShareWidget from '../components/ShareWidget';
import { TrainingLog, Comment } from '../types';

const TrainingLogPage: React.FC = () => {
  const [logs, setLogs] = useState<TrainingLog[]>(MOCK_LOGS);
  const [commentInputs, setCommentInputs] = useState<Record<string, { author: string; text: string }>>({});

  const handleInputChange = (logId: string, field: 'author' | 'text', value: string) => {
    setCommentInputs(prev => ({
      ...prev,
      [logId]: {
        ...prev[logId],
        [field]: value
      }
    }));
  };

  const handleSubmitComment = (logId: string) => {
    const input = commentInputs[logId];
    if (!input?.text.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      author: input.author.trim() || 'Supporter',
      text: input.text,
      date: new Date().toLocaleDateString()
    };

    setLogs(prevLogs => prevLogs.map(log => {
      if (log.id === logId) {
        return {
          ...log,
          comments: [...(log.comments || []), newComment]
        };
      }
      return log;
    }));

    // Clear text input, keep author for convenience
    setCommentInputs(prev => ({
      ...prev,
      [logId]: {
        ...prev[logId],
        text: ''
      }
    }));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-slate-900">Training Log</h1>
        <p className="text-slate-600 mt-2 text-lg">Daily updates from the trail.</p>
      </div>

      <div className="space-y-12">
        {logs.map((log) => (
          <div key={log.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Header / Date Badge */}
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
               <div className="flex items-center gap-2">
                 <Calendar className="w-5 h-5 text-[#2B8FBD]" />
                 <span className="font-bold text-slate-900">{log.date}</span>
               </div>
               <span className={`text-xs px-3 py-1 rounded-full capitalize font-bold tracking-wide
                    ${log.mood === 'great' ? 'bg-green-100 text-green-700' : 
                      log.mood === 'hard' ? 'bg-red-100 text-red-700' : 
                      log.mood === 'recovery' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                    Mood: {log.mood}
                </span>
            </div>

            <div className="p-6 md:p-8">
              {/* Stats Row */}
              <div className="flex flex-wrap gap-6 mb-6 text-sm">
                <div className="flex items-center gap-2">
                   <div className="p-2 bg-slate-100 rounded-lg"><Activity className="w-4 h-4 text-slate-600" /></div>
                   <div>
                      <div className="text-slate-500 text-xs uppercase">Activity</div>
                      <div className="font-bold text-slate-900">{log.activity}</div>
                   </div>
                </div>
                 <div className="flex items-center gap-2">
                   <div className="p-2 bg-slate-100 rounded-lg"><MapPin className="w-4 h-4 text-slate-600" /></div>
                   <div>
                      <div className="text-slate-500 text-xs uppercase">Distance</div>
                      <div className="font-bold text-slate-900">{log.miles} mi</div>
                   </div>
                </div>
                 <div className="flex items-center gap-2">
                   <div className="p-2 bg-slate-100 rounded-lg"><Clock className="w-4 h-4 text-slate-600" /></div>
                   <div>
                      <div className="text-slate-500 text-xs uppercase">Duration</div>
                      <div className="font-bold text-slate-900">{log.duration}</div>
                   </div>
                </div>
                 {log.pace && (
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-slate-100 rounded-lg"><Activity className="w-4 h-4 text-slate-600" /></div>
                      <div>
                          <div className="text-slate-500 text-xs uppercase">Pace</div>
                          <div className="font-bold text-slate-900">{log.pace}</div>
                      </div>
                    </div>
                 )}
              </div>
              
              {/* Image */}
              {log.imageUrl && (
                 <div className="mb-6 rounded-xl overflow-hidden">
                    <img src={log.imageUrl} alt="Training view" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" />
                 </div>
              )}

              {/* Notes Section */}
              <div className="mb-6">
                 <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Training Notes</h3>
                 <p className="text-slate-700 leading-relaxed">{log.notes}</p>
              </div>

              {/* Reflection Section */}
              {log.reflection && (
                <div className="bg-[#F7B32B]/10 p-5 rounded-xl border border-[#F7B32B]/20 relative mb-6">
                   <Quote className="w-8 h-8 text-[#F7B32B]/40 absolute top-4 right-4" />
                   <h3 className="text-sm font-bold text-[#b47d0f] uppercase tracking-wider mb-2">Reflection</h3>
                   <p className="text-slate-800 italic relative z-10">{log.reflection}</p>
                </div>
              )}

              {/* Footer Actions */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                     <Share2 className="w-4 h-4" />
                     <span className="font-medium">Share this update</span>
                  </div>
                  <ShareWidget 
                    compact 
                    text={`🏃 Just ran ${log.miles} miles! "${log.notes.substring(0, 40)}..." Follow my Snowdrop 55 training:`} 
                  />
              </div>

              {/* Comments Section */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#2B8FBD]" /> 
                    Community Encouragement {log.comments && log.comments.length > 0 && `(${log.comments.length})`}
                </h4>

                {log.comments && log.comments.length > 0 ? (
                    <div className="space-y-4 mb-6">
                        {log.comments.map((comment) => (
                            <div key={comment.id} className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-[#2B8FBD] font-bold text-xs shadow-sm">
                                    {comment.author.charAt(0).toUpperCase()}
                                </div>
                                <div className="flex-1">
                                    <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200 text-sm shadow-sm inline-block min-w-[200px]">
                                        <div className="flex justify-between items-baseline gap-4 mb-1">
                                            <span className="font-bold text-slate-900">{comment.author}</span>
                                            <span className="text-[10px] text-slate-400 uppercase">{comment.date}</span>
                                        </div>
                                        <p className="text-slate-700">{comment.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-sm text-slate-500 italic mb-6">No comments yet. Be the first to cheer Cong on!</p>
                )}

                {/* Comment Input */}
                <div className="flex flex-col gap-3">
                    <div className="flex gap-3">
                        <input 
                            type="text" 
                            placeholder="Your Name"
                            className="w-1/3 text-sm px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#2B8FBD] focus:ring-1 focus:ring-[#2B8FBD]"
                            value={commentInputs[log.id]?.author || ''}
                            onChange={(e) => handleInputChange(log.id, 'author', e.target.value)}
                        />
                        <div className="relative flex-1">
                            <input 
                                type="text" 
                                placeholder="Leave an encouraging message..."
                                className="w-full text-sm px-4 py-2 pr-12 rounded-lg border border-slate-300 focus:outline-none focus:border-[#2B8FBD] focus:ring-1 focus:ring-[#2B8FBD]"
                                value={commentInputs[log.id]?.text || ''}
                                onChange={(e) => handleInputChange(log.id, 'text', e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSubmitComment(log.id)}
                            />
                            <button 
                                onClick={() => handleSubmitComment(log.id)}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-[#2B8FBD] hover:bg-blue-50 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={!commentInputs[log.id]?.text}
                                aria-label="Post comment"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingLogPage;