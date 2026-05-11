"use client";
import { motion } from "framer-motion";
import {
  Send,
  MapPin,
  Mail,
  MonitorSmartphone,
  Share2,
  MessageSquare,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 blur-[120px] rounded-t-full pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-white">
            Ayo bangun sesuatu yang <span className="text-gold">berani</span>.
          </h2>
          <p className="text-slate-300">
            Baik itu kolaborasi kode atau undangan sesi Taekwondo—saya siap
            membalas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 relative z-10">
          {/* Info Kontak */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-navy/30 p-8 rounded-3xl border border-gold/20 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-8 text-white font-heading">
                Informasi Kontak
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-dark border border-gold/30 flex items-center justify-center text-gold">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-gold font-bold">
                      Email
                    </p>
                    <p className="font-medium text-white text-sm">
                      izhhar.lubis@example.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-dark border border-gold/30 flex items-center justify-center text-gold">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-gold font-bold">
                      Lokasi
                    </p>
                    <p className="font-medium text-white text-sm">
                      Tangerang, Banten, Indonesia
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-[10px] uppercase text-gold font-bold mb-4">
                  Jejaring Sosial
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    title="GitHub"
                    className="w-10 h-10 rounded-lg bg-dark border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-colors"
                  >
                    <MonitorSmartphone size={18} />
                  </a>
                  <a
                    href="#"
                    title="LinkedIn"
                    className="w-10 h-10 rounded-lg bg-dark border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-colors"
                  >
                    <Share2 size={18} />
                  </a>
                  <a
                    href="#"
                    title="Instagram"
                    className="w-10 h-10 rounded-lg bg-dark border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-colors"
                  >
                    <MessageSquare size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {/* Form sekarang menggunakan onSubmit untuk memicu fungsi pengiriman ke WA */}
            <form
              onSubmit={(e) => {
                e.preventDefault();

                // GANTI DENGAN NOMOR WHATSAPP ANDA (Gunakan format 62 tanpa tanda + atau 0)
                const phoneNumber = "6285715567144";

                // Mengambil nilai dari input form
                const formData = new FormData(e.currentTarget);
                const nama = formData.get("nama") as string;
                const email = formData.get("email") as string;
                const pesan = formData.get("pesan") as string;

                // Merakit pesan dengan format yang rapi untuk WhatsApp
                const textMessage = `Halo Sabeum/Dev Izhhar, saya tertarik berkolaborasi!\n\n*Nama:* ${nama}\n*Email:* ${email}\n*Pesan:* ${pesan}`;

                // Mengubah teks menjadi format URL yang valid dan membuka WhatsApp
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textMessage)}`;
                window.open(whatsappUrl, "_blank");
              }}
              className="bg-navy/30 p-10 rounded-3xl space-y-6 border border-gold/20 backdrop-blur-sm"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gold">
                    Nama
                  </label>
                  <input
                    type="text"
                    name="nama" // Wajib ditambahkan agar datanya bisa ditangkap
                    required
                    placeholder="Nama Anda"
                    className="w-full bg-dark/50 border border-gold/30 text-white rounded-xl px-4 py-3 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gold">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email" // Wajib ditambahkan
                    required
                    placeholder="email@anda.com"
                    className="w-full bg-dark/50 border border-gold/30 text-white rounded-xl px-4 py-3 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder-slate-600"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gold">
                  Pesan
                </label>
                <textarea
                  rows={4}
                  name="pesan" // Wajib ditambahkan
                  required
                  placeholder="Ceritakan ide proyek atau sapaan Anda..."
                  className="w-full bg-dark/50 border border-gold/30 text-white rounded-xl px-4 py-3 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder-slate-600 resize-none"
                ></textarea>
              </div>
              <motion.button
                type="submit" // Pastikan tipenya submit
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-gold to-premium text-dark font-bold py-4 rounded-xl flex items-center justify-center space-x-2 uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-shadow cursor-pointer"
              >
                <span>Kirim Pesan ke WA</span>
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer Pendek */}
      <div className="absolute bottom-4 w-full text-center z-10">
        <p className="text-xs text-slate-500 font-heading tracking-widest">
          © 2026 IZHHAR DIGITAL ARENA.
        </p>
      </div>
    </section>
  );
}
