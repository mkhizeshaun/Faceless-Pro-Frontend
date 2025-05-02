import { useState } from "react";

export default function App() { const [topic, setTopic] = useState(""); const [script, setScript] = useState(""); const [audioUrl, setAudioUrl] = useState(""); const [loading, setLoading] = useState(false);

const generateScript = async () => { setLoading(true); const res = await fetch("https://faceless-pro-backend-2-2.onrender.com/generate-script", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ topic }) }); const data = await res.json(); setScript(data.script); setLoading(false); };

const generateVoiceover = async () => { setLoading(true); const res = await fetch("https://faceless-pro-backend-2-2.onrender.com/voiceover", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ script }) }); const data = await res.json(); setAudioUrl(data.file); setLoading(false); };

return ( <div className="p-6 max-w-xl mx-auto text-center"> <h1 className="text-3xl font-bold mb-4">FacelessPro AI Script & Voice</h1> <input type="text" placeholder="Enter topic..." className="border p-2 w-full mb-4" value={topic} onChange={(e) => setTopic(e.target.value)} /> <button onClick={generateScript} className="bg-blue-500 text-white px-4 py-2 rounded mr-2"> Generate Script </button> {script && ( <div className="mt-4"> <textarea className="w-full border p-2" rows={6} value={script} readOnly /> <button onClick={generateVoiceover} className="bg-green-500 text-white px-4 py-2 rounded mt-2"> Generate Voiceover </button> </div> )} {audioUrl && ( <div className="mt-4"> <audio controls src={audioUrl}></audio> </div> )} {loading && <p className="mt-4 text-gray-500">Processing...</p>} </div> ); }

                                                                                  
