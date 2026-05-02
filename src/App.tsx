/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  BarChart3, 
  BookOpen, 
  Briefcase, 
  CheckCircle2, 
  ChevronRight, 
  Globe, 
  History, 
  Instagram, 
  Linkedin, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Phone, 
  PlayCircle, 
  ShieldCheck, 
  Target, 
  Users,
  Video
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 h-20">
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">
            P
          </div>
          <span className="font-display font-bold text-xl text-brand-blue tracking-tight">
            PMI <span className="text-gray-400 font-normal">Indonesia</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#layanan" className="hover:text-brand-blue transition-colors">Layanan</a>
          <a href="#tentang" className="hover:text-brand-blue transition-colors">Tentang Kami</a>
          <a href="#portfolio" className="hover:text-brand-blue transition-colors">Portfolio</a>
          <button className="bg-brand-blue text-white px-6 py-2.5 rounded-full hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/10">
            Mulai Konsultasi
          </button>
        </div>
      </div>
    </nav>
  );
};

const ServiceCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="p-8 rounded-3xl border border-gray-100 hover:border-brand-blue/30 transition-all bg-white hover:shadow-2xl group"
  >
    <div className="w-14 h-14 bg-brand-blue/5 rounded-2xl flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-500">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-display font-bold mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
  </motion.div>
);

export default function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-brand-dark selection:bg-brand-blue selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 gradient-bg relative overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-brand-blue text-xs font-bold uppercase tracking-wider mb-8">
              <ShieldCheck size={14} /> Global Standard Project Management
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
              Membangun Keunggulan <span className="text-brand-blue">Project Management</span> di Indonesia.
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
              Tingkatkan kapabilitas tim dan percepat pertumbuhan bisnis Anda melalui konsultasi strategis, pelatihan sertifikasi PMP®, dan sistem manajemen proyek terintegrasi.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto bg-brand-accent text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-orange-500/20">
                Daftar Pelatihan Sekarang
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg border-2 border-gray-100 hover:border-brand-blue/20 transition-all">
                <PlayCircle className="text-brand-blue" /> Lihat Webinar Gratis
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-6 p-4 rounded-2xl bg-gray-50/50 w-fit border border-gray-100">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="User" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium">
                <span className="text-brand-blue font-bold">2,500+</span> Profesional telah bergabung
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              {/* Replace with generated image path if needed, using high-quality Unsplash for variety */}
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200" 
                alt="Professional Management Indonesia" 
                className="w-full h-auto object-cover aspect-[4/5] md:aspect-square"
              />
            </div>
            
            {/* Glassmorphism overlays */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-12 top-1/4 z-20 glass-card p-6 rounded-3xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <CheckCircle2 />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">Project Success</p>
                  <p className="text-2xl font-display font-bold">98.5%</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-8 bottom-12 z-20 glass-card p-6 rounded-3xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white">
                  <Users />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase">Expert Consultants</p>
                  <p className="text-2xl font-display font-bold">45+</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Marks */}
      <section className="py-12 border-y border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-10">
            Dipercaya oleh Perusahaan Terkemuka di Indonesia
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {['Pertamina', 'BCA', 'Telkom', 'Gojek', 'Mandiri', 'Indofood'].map(client => (
              <span key={client} className="text-2xl font-display font-bold italic">{client}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="layanan" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">Layanan Strategis untuk Kesuksesan Proyek Anda</h2>
            <p className="text-gray-600">PMI Indonesia menghadirkan solusi end-to-end untuk tantangan manajemen proyek paling kompleks, mulai dari pengembangan SDM hingga sistem infrastruktur digital.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={BookOpen}
              title="Pelatihan PMP®"
              desc="Program persiapan sertifikasi Project Management Professional kelas dunia dengan tingkat kelulusan tinggi."
              delay={0.1}
            />
            <ServiceCard 
              icon={Briefcase}
              title="Konsultasi PMO"
              desc="Pembentukan dan optimasi Project Management Office untuk standardisasi tata kelola perusahaan."
              delay={0.2}
            />
            <ServiceCard 
              icon={BarChart3}
              title="Software & Tools"
              desc="Implementasi sistem manajemen proyek digital (Monday, Jira, Asana) yang disesuaikan dengan workflow tim."
              delay={0.3}
            />
            <ServiceCard 
              icon={Target}
              title="Audit Proyek"
              desc="Evaluasi independen terhadap kesehatan proyek untuk mitigasi risiko dan pemulihan proyek bermasalah."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-24 bg-brand-dark text-white rounded-[4rem] mx-6 my-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/20 blur-[120px] rounded-full -mr-48 -mt-48"></div>
        <div className="container mx-auto px-12 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <h2 className="text-4xl font-display font-bold mb-8">Pionir Modernisasi Project Management di Indonesia</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue">
                  <History size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Pengalaman 15+ Tahun</h4>
                  <p className="text-gray-400 text-sm">Telah membantu ratusan organisasi bertransformasi dari cara kerja tradisional ke manajemen terstruktur.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue">
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Jaringan Global</h4>
                  <p className="text-gray-400 text-sm">Menghubungkan praktisi lokal dengan standar internasional dan update metodologi Agile/Waterfall terkini.</p>
                </div>
              </div>
            </div>
            <button className="mt-12 group flex items-center gap-3 text-white font-bold">
              Pelajari Visi Misi Kami <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square bg-gray-800 rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Workshop" />
              </div>
              <div className="p-8 bg-brand-blue rounded-3xl text-center">
                <p className="text-5xl font-display font-bold">500+</p>
                <p className="text-xs font-bold uppercase mt-2 opacity-80">Proyek Konsultasi</p>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="p-8 bg-gray-800 rounded-3xl text-center">
                <p className="text-5xl font-display font-bold">12k</p>
                <p className="text-xs font-bold uppercase mt-2 opacity-80">Alumni Pelatihan</p>
              </div>
              <div className="aspect-square bg-gray-800 rounded-3xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Meeting" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funnel: Webinar Invitation */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-blue-600 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-10">
              <Video size={400} />
            </div>
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-bold uppercase tracking-widest">Live Webinar Mendatang</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-display font-bold mb-8">
                Mastering Project Recovery: Cara Menyelamatkan Proyek yang Hampir Gagal.
              </h2>
              <p className="text-lg text-blue-100 mb-10">
                Join 500+ professionals this Saturday. Webinar gratis yang akan membahas framework PMI untuk identifikasi risiko dini dan strategi "turnaround".
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-brand-blue px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl">
                  Amankan Kursi Anda (Gratis)
                </button>
                <button className="bg-blue-500 text-white border border-blue-400 px-10 py-5 rounded-2xl font-bold hover:bg-blue-400 transition-all">
                  Lihat Rekaman Sebelumnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Generation Form */}
      <section id="daftar" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">Siap Memulai Perjalanan Anda?</h2>
            <p className="text-gray-600 mb-12">Pilih program yang paling sesuai dengan kebutuhan karir atau perusahaan Anda. Tim spesialis kami akan menghubungi Anda dalam waktu 1x24 jam.</p>
            
            <div className="space-y-6">
              {[
                { label: 'Telepon Langsung', value: '+62 21 5566 7788', icon: Phone },
                { label: 'Konsultasi via Email', value: 'hello@pmindonesia.com', icon: Mail },
                { label: 'Kantor Pusat', value: 'Pacific Century Place, Lt. 35, Jakarta Selatan', icon: MapPin },
              ].map(item => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-brand-blue">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase">{item.label}</p>
                    <p className="font-bold text-lg">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-10 lg:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100">
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-gray-700">Nama Lengkap</label>
                       <input type="text" required placeholder="Joko Susilo" className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-gray-700">Email Kerja</label>
                       <input type="email" required placeholder="joko@perusahaan.com" className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-700">Layanan yang Diminati</label>
                     <select className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all">
                       <option>Pelatihan PMP® Certification</option>
                       <option>Konsultasi Implementasi PMO</option>
                       <option>Pelatihan In-House Perusahaan</option>
                       <option>Webinar & Seminar Gratis</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-700">Pesan / Pertanyaan (Opsional)</label>
                     <textarea rows={4} placeholder="Ceritakan tantangan proyek Anda..." className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"></textarea>
                  </div>
                  <button className="w-full bg-brand-blue text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all shadow-xl shadow-blue-500/20">
                    Kirim Penawaran
                  </button>
                  <p className="text-center text-xs text-gray-400">Dengan mengirim formulir ini, Anda menyetujui Kebijakan Privasi kami.</p>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4">Terima Kasih!</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">Permintaan Anda telah kami terima. Tim ahli PMI Indonesia akan menghubungi Anda segera melalui email.</p>
                  <button onClick={() => setFormSubmitted(false)} className="text-brand-blue font-bold px-8 py-3 rounded-full border border-brand-blue/20 hover:bg-brand-blue/5 transition-all">
                    Kirim Pesan Lain
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-white pt-24 pb-12 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">P</div>
                <span className="font-display font-bold text-xl text-brand-blue tracking-tight">PMI <span className="text-gray-400 font-normal">Indonesia</span></span>
              </div>
              <p className="text-gray-500 leading-relaxed mb-8">
                Lembaga pengembangan manajemen proyek terdepan di Indonesia. Berkomitmen menciptakan ekosistem kerja yang efisien, terukur, dan berdampak.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-white transition-all"><Linkedin size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-white transition-all"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-white transition-all"><MessageSquare size={18} /></a>
              </div>
            </div>
            
            <div>
              <h4 className="font-display font-bold mb-8 uppercase text-xs tracking-widest text-gray-400">Navigasi</h4>
              <ul className="space-y-4 font-medium text-gray-600">
                <li><a href="#" className="hover:text-brand-blue transition-colors">Beranda</a></li>
                <li><a href="#layanan" className="hover:text-brand-blue transition-colors">Layanan Kami</a></li>
                <li><a href="#tentang" className="hover:text-brand-blue transition-colors">Tentang Kami</a></li>
                <li><a href="#daftar" className="hover:text-brand-blue transition-colors">Program Training</a></li>
                <li><a href="#" className="hover:text-brand-blue transition-colors">Blog & Resource</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold mb-8 uppercase text-xs tracking-widest text-gray-400">Legal</h4>
              <ul className="space-y-4 font-medium text-gray-600">
                <li><a href="#" className="hover:text-brand-blue transition-colors">Syarat & Ketentuan</a></li>
                <li><a href="#" className="hover:text-brand-blue transition-colors">Kebijakan Privasi</a></li>
                <li><a href="#" className="hover:text-brand-blue transition-colors">SLA Pelanggan</a></li>
                <li><a href="#" className="hover:text-brand-blue transition-colors">Credential</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold mb-8 uppercase text-xs tracking-widest text-gray-400">Kontak</h4>
              <ul className="space-y-4 font-medium text-gray-600">
                <li className="flex gap-3"><MapPin size={18} className="text-brand-blue shrink-0" /> Pacific Century Place Lt 35, Jakarta Selatan</li>
                <li className="flex gap-3"><Phone size={18} className="text-brand-blue shrink-0" /> +62 21 5566 7788</li>
                <li className="flex gap-3"><Mail size={18} className="text-brand-blue shrink-0" /> service@pmindonesia.com</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-400">© 2026 Project Management Indonesia. All Rights Reserved.</p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-400">POWERED BY</span>
              <span className="font-display font-bold text-brand-blue">Global PMI Standards</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
