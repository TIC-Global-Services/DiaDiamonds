"use client";

import { useState, useRef, DragEvent, ChangeEvent } from "react";

export default function ContactForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const MAX_FILES = 10;
  const MAX_SIZE_MB = 10;

  const addFiles = (incoming: FileList | null) => {
    if (!incoming) return;
    const valid: File[] = [];
    Array.from(incoming).forEach((f) => {
      if (f.size > MAX_SIZE_MB * 1024 * 1024) return; // skip oversized
      if (files.length + valid.length >= MAX_FILES) return; // skip over limit
      valid.push(f);
    });
    setFiles((prev) => [...prev, ...valid]);
    // clear file error when files added
    setErrors((prev) => ({ ...prev, files: "" }));
  };

  const removeFile = (idx: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    addFiles(e.dataTransfer.files);
  };

  const validate = (formData: FormData) => {
    const newErrors: Record<string, string> = {};
    if (!formData.get("fullName")) newErrors.fullName = "Full name is required";
    if (!formData.get("email")) newErrors.email = "Email is required";
    if (!formData.get("subject")) newErrors.subject = "Subject is required";
    if (!formData.get("message")) newErrors.message = "Message is required";
    if (files.length === 0) newErrors.files = "Please attach at least one file";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log("submitted"); //console
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <section
      className="relative max-w-[1400px] mx-auto px-[3.64%] py-[8.25%] md:px-0 md:py-23 md:mt-20 w-full md:aspect-[1440/940] bg-[#F5ECE0]"
    >
      <div className="w-full md:absolute md:top-[-45.82%] md:left-[25.35%] md:w-[50.31%] rounded-[25px] md:rounded-[0px] md:mx-auto bg-[#FCF9F4] p-[1.88%]">
        <h2 className="text-center py-8 md:py-0 md:pt-[7.32%] md:pb-[1.49%] h2 tracking-tight">
          Inquiry Form
        </h2>

        <form
          onSubmit={handleSubmit}
          className="px-[6.32%] md:px-[3.38%] md:py-[1.69%]"
        >
          {/* Full Name */}
          <label className="pb-[2.63%] md:pb-[1.70%] block">Full Name</label>
          <input
            name="fullName"
            type="text"
            maxLength={50}
            className="w-full aspect-332/40 md:aspect-542/54 mb-1 p-4 bg-[#FFFFFF]/40 backdrop-blur-md border border-white rounded-3xl shadow-[inset_0px_0px_4px_0_rgba(0,0,0,0.25)]"
          />
          {errors.fullName && <p className="text-red-500 text-xs mb-3">{errors.fullName}</p>}
          <div className="mb-[8.96%] md:mb-[3.39%]" />

          {/* Email */}
          <label className="pb-[2.63%] md:pb-[1.70%] block">Email</label>
          <input
            name="email"
            type="email"
            className="w-full aspect-332/40 md:aspect-542/54 mb-1 p-4 bg-[#FFFFFF]/40 backdrop-blur-md border border-white rounded-3xl shadow-[inset_0px_0px_4px_0_rgba(0,0,0,0.25)]"
          />
          {errors.email && <p className="text-red-500 text-xs mb-3">{errors.email}</p>}
          <div className="mb-[8.96%] md:mb-[3.39%]" />

          {/* Subject */}
          <label className="pb-[2.63%] md:pb-[1.70%] block">Subject</label>
          <input
            name="subject"
            type="text"
            maxLength={100}
            className="w-full aspect-332/40 md:aspect-542/54 mb-1 p-4 bg-[#FFFFFF]/40 backdrop-blur-md border border-white rounded-3xl shadow-[inset_0px_0px_4px_0_rgba(0,0,0,0.25)]"
          />
          {errors.subject && <p className="text-red-500 text-xs mb-3">{errors.subject}</p>}
          <div className="mb-[8.96%] md:mb-[3.39%]" />

          {/* Message */}
          <label className="pb-[2.63%] md:pb-[1.70%] block">Message</label>
          <textarea
            name="message"
            className="w-full aspect-332/180 md:aspect-542/180 mb-1 p-4 bg-[#FFFFFF]/40 backdrop-blur-md border border-white/30 rounded-3xl shadow-[inset_0px_0px_4px_0_rgba(0,0,0,0.25)]"
          />
          {errors.message && <p className="text-red-500 text-xs mb-3">{errors.message}</p>}
          <div className="mb-[8.96%] md:mb-[3.39%]" />

          {/* Attach File */}
          <label className="pb-[2.63%] md:pb-[1.70%] block">Attach File</label>

          {/* Drop Zone */}
          <div
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={onDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`relative flex flex-col justify-center items-center border-dashed border-[1px] rounded-[10px] py-[4%] px-[3.68%] cursor-pointer transition-colors duration-200
              ${isDragging ? "bg-[#7C3C3C]/10 border-[#7C3C3C]" : "border-gray-300 hover:border-[#7C3C3C]/50"}
              ${errors.files ? "border-red-400" : ""}
            `}
          >
            <svg className="mb-3" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 16V8M12 8L9 11M12 8L15 11" stroke="#7C3C3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7 20H17M3 15V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V15" stroke="#7C3C3C" strokeWidth="1.5" strokeLinecap="round" />
            </svg>

            <h3 className="mb-1 text-sm md:text-base font-medium">
              {isDragging ? "Drop files here" : "Drag & drop or click to browse"}
            </h3>
            <p className="text-center text-[#B1B1B1] text-[12px] md:text-sm">
              Up to {MAX_FILES} files · Max {MAX_SIZE_MB}MB each
            </p>

            <input
              ref={fileInputRef}
              type="file"
              multiple
              className="hidden"
              onChange={(e: ChangeEvent<HTMLInputElement>) => addFiles(e.target.files)}
            />
          </div>

          {errors.files && (
            <p className="text-red-500 text-xs mt-1">{errors.files}</p>
          )}

          {/* Uploaded File List */}
          {files.length > 0 && (
            <ul className="mt-3 space-y-2">
              {files.map((file, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between bg-[#FFFFFF]/60 border border-white rounded-xl px-4 py-2"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    {/* File icon */}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#7C3C3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14 2V8H20" stroke="#7C3C3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[14px] truncate max-w-[180px] md:max-w-[300px]">
                      {file.name}
                    </span>
                    <span className="text-[11px] text-[#B1B1B1] shrink-0">
                      {formatSize(file.size)}
                    </span>
                  </div>

                  {/* Remove button */}
                  <button
                    type="button"
                    onClick={() => removeFile(idx)}
                    className="ml-2 text-[#B1B1B1] hover:text-red-500 transition-colors shrink-0"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="mb-[8.96%] md:mb-[3.39%]" />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#7C3C3C] text-white rounded-[20px] py-[3.16%] md:py-[2.03%] mt-[11.32%] md:mt-[6.10%] mb-[2.63%] md:mb-[1.70%] hover:bg-[#5a2b2b] transition-colors"
          >
            Send
          </button>

          <p className="text-[14px] font-light text-[#585858F7] mt-2 mb-[22.64%] md:mb-[8.14%] text-center md:text-left">
            This site is protected by reCAPTCHA Enterprise & Google{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70">
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </form>
      </div>
    </section>
  );
}