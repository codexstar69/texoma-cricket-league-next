'use client';
import { useState, useRef, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
   UserFocus, UsersThree, Buildings, Person, Megaphone, Notepad,
   UserCirclePlus, CheckCircle, UserCircle,
   User, ClipboardText, Lock, WarningCircle, CircleNotch,
   EnvelopeSimple, Clock, ChatCircle, ArrowRight, CaretDown, Check
} from '@phosphor-icons/react';
import Link from 'next/link';

// --- TYPES ---
type RegType = 'player' | 'team' | 'academy' | 'adult' | 'coach' | 'umpire';

const REG_TYPES: { id: RegType; label: string; sub: string; icon: React.ElementType }[] = [
   { id: 'player', label: 'Player', sub: 'Player registration', icon: UserFocus },
   { id: 'team', label: 'Team', sub: 'Register a full team', icon: UsersThree },
   { id: 'academy', label: 'Academy', sub: 'Academy partnership inquiry', icon: Buildings },
   { id: 'adult', label: 'Adult Player', sub: 'Weekend Warriors / Rec', icon: Person },
   { id: 'coach', label: 'Coach', sub: 'Coach registration', icon: Megaphone },
   { id: 'umpire', label: 'Umpire / Scorer', sub: 'Official registration', icon: Notepad },
];

interface FormContextType {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   formData: Record<string, any>;
   errors: Record<string, string>;
   handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
   handleMultiSelect: (name: string, value: string) => void;
}

const FormContext = createContext<FormContextType | null>(null);

// --- FIELD COMPONENTS ---
interface FieldProps {
   label: string;
   name: string;
   type?: string;
   placeholder?: string;
   required?: boolean;
   half?: boolean;
   options?: string[];
   helper?: React.ReactNode;
}

const Input = ({ label, name, type = "text", placeholder, required, half }: FieldProps) => {
   const { formData, errors, handleChange } = useContext(FormContext)!;
   return (
      <div className={`flex flex-col ${half ? 'col-span-1' : 'col-span-2'}`}>
         <label htmlFor={name} className="font-source-sans text-[14px] font-semibold text-tcl-navy mb-2">
            {label} {required && <span className="text-tcl-crimson">*</span>}
            {!required && <span className="text-[#AAA] font-normal text-[12px] ml-1">(optional)</span>}
         </label>
         <input
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            value={formData[name] || ''}
            onChange={handleChange}
            aria-required={required}
            aria-invalid={!!errors[name]}
            aria-describedby={errors[name] ? `${name}-error` : undefined}
            className={`w-full rounded-xl border-[1.5px] bg-tcl-input-bg px-5 py-3.5 text-[16px] text-[#333] placeholder-[#BBB] font-source-sans transition-all duration-200 focus:outline-none focus:ring-[3px]
              ${errors[name]
                  ? 'border-tcl-crimson focus:border-tcl-crimson focus:ring-tcl-crimson/10'
                  : 'border-tcl-light-gray focus:border-tcl-crimson focus:ring-tcl-crimson/10'}
           `}
         />
         {errors[name] && (
            <div id={`${name}-error`} className="flex items-center gap-1.5 mt-2 text-tcl-crimson" role="alert">
               <WarningCircle weight="bold" size={14} />
               <span className="text-[13px] font-source-sans">{errors[name]}</span>
            </div>
         )}
      </div>
   );
};

const Select = ({ label, name, options = [], required, half, helper }: FieldProps) => {
   const { formData, errors, handleChange } = useContext(FormContext)!;
   return (
      <div className={`flex flex-col ${half ? 'col-span-1' : 'col-span-2'}`}>
         <label htmlFor={name} className="font-source-sans text-[14px] font-semibold text-tcl-navy mb-2">
            {label} {required && <span className="text-tcl-crimson">*</span>}
            {!required && <span className="text-[#AAA] font-normal text-[12px] ml-1">(optional)</span>}
         </label>
         <div className="relative">
            <select
               id={name}
               name={name}
               value={formData[name] || ''}
               onChange={handleChange}
               aria-required={required}
               aria-invalid={!!errors[name]}
               className={`w-full rounded-xl border-[1.5px] bg-tcl-input-bg px-5 py-3.5 text-[16px] text-[#333] font-source-sans transition-all duration-200 focus:outline-none focus:ring-[3px] appearance-none
                 ${!formData[name] ? 'text-[#BBB]' : 'text-[#333]'}
                 ${errors[name]
                     ? 'border-tcl-crimson focus:border-tcl-crimson focus:ring-tcl-crimson/10'
                     : 'border-tcl-light-gray focus:border-tcl-crimson focus:ring-tcl-crimson/10'}
              `}
            >
               <option value="" disabled>Select an option</option>
               {options.map((opt: string) => (
                  <option key={opt} value={opt}>{opt}</option>
               ))}
            </select>
            <CaretDown weight="bold" size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-[#999] pointer-events-none" />
         </div>
         {helper && <p className="mt-2 text-[12px] text-[#999] font-source-sans">{helper}</p>}
         {errors[name] && (
            <div className="flex items-center gap-1.5 mt-2 text-tcl-crimson" role="alert">
               <WarningCircle weight="bold" size={14} />
               <span className="text-[13px] font-source-sans">{errors[name]}</span>
            </div>
         )}
      </div>
   );
};

const Textarea = ({ label, name, placeholder, required, helper }: FieldProps) => {
   const { formData, handleChange } = useContext(FormContext)!;
   return (
      <div className="col-span-2 flex flex-col">
         <label htmlFor={name} className="font-source-sans text-[14px] font-semibold text-tcl-navy mb-2">
            {label} {required && <span className="text-tcl-crimson">*</span>}
            {!required && <span className="text-[#AAA] font-normal text-[12px] ml-1">(optional)</span>}
         </label>
         <textarea
            id={name}
            name={name}
            placeholder={placeholder}
            rows={4}
            value={formData[name] || ''}
            onChange={handleChange}
            className="w-full rounded-xl border-[1.5px] border-tcl-light-gray bg-tcl-input-bg px-5 py-3.5 text-[16px] text-[#333] placeholder-[#BBB] font-source-sans transition-all duration-200 focus:border-tcl-crimson focus:outline-none focus:ring-[3px] focus:ring-tcl-crimson/10 resize-y min-h-[100px]"
         />
         {helper && <div className="mt-2 flex items-start gap-1.5 text-[12px] text-[#999] font-source-sans">{helper}</div>}
      </div>
   );
};

const CheckboxGroup = ({ label, name, options = [], required }: FieldProps) => {
   const { formData, errors, handleMultiSelect } = useContext(FormContext)!;
   return (
      <div className="col-span-2 flex flex-col">
         <label className="font-source-sans text-[14px] font-semibold text-tcl-navy mb-3">
            {label} {required && <span className="text-tcl-crimson">*</span>}
         </label>
         <div className="flex flex-wrap gap-2" role="group" aria-label={label}>
            {options.map((opt: string) => {
               const isSelected = (formData[name] || []).includes(opt);
               return (
                  <button
                     key={opt}
                     type="button"
                     onClick={() => handleMultiSelect(name, opt)}
                     className={`
                       px-4 py-2 rounded-full border-[1.5px] font-source-sans text-[13px] font-medium transition-all duration-200 flex items-center gap-2
                       ${isSelected
                           ? 'bg-tcl-crimson/10 border-tcl-crimson text-tcl-navy'
                           : 'bg-tcl-input-bg border-tcl-light-gray text-[#666] hover:border-tcl-crimson hover:bg-tcl-crimson/5'}
                    `}
                     aria-pressed={isSelected}
                  >
                     {isSelected && <CheckCircle weight="fill" size={14} className="text-tcl-crimson" />}
                     {opt}
                  </button>
               )
            })}
            {/* Hidden input for validation tracking if needed */}
            <input type="hidden" name={name} value={formData[name] || ''} aria-required={required} />
         </div>
         {errors[name] && (
            <div className="flex items-center gap-1.5 mt-2 text-tcl-crimson" role="alert">
               <WarningCircle weight="bold" size={14} />
               <span className="text-[13px] font-source-sans">{errors[name]}</span>
            </div>
         )}
      </div>
   );
};

const RegisterForm = () => {

   const [selectedType, setSelectedType] = useState<RegType | null>(null);
   const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
   const [errors, setErrors] = useState<Record<string, string>>({});
   const formRef = useRef<HTMLFormElement>(null);

   // Minimal form state management for demo - in production use React Hook Form
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const [formData, setFormData] = useState<Record<string, any>>({
      newsletter: false,
      terms: false,
      mediaConsent: false
   });

   const handleTypeSelect = (id: RegType) => {
      setSelectedType(id);
      setErrors({});
      // Small smooth scroll to ensure fields are visible
      setTimeout(() => {
         const formEl = document.getElementById('reg-form-fields');
         if (formEl) {
            const y = formEl.getBoundingClientRect().top + window.scrollY - 120;
            window.scrollTo({ top: y, behavior: 'smooth' });
         }
      }, 100);
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value, type } = e.target;
      const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

      setFormData(prev => ({ ...prev, [name]: val }));

      // Clear error
      if (errors[name]) {
         setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[name];
            return newErrors;
         });
      }
   };

   const handleMultiSelect = (name: string, value: string) => {
      const current = formData[name] || [];
      let updated;
      if (current.includes(value)) {
         updated = current.filter((item: string) => item !== value);
      } else {
         updated = [...current, value];
      }
      setFormData(prev => ({ ...prev, [name]: updated }));
      if (errors[name]) {
         setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[name];
            return newErrors;
         });
      }
   };

   const validate = () => {
      const newErrors: Record<string, string> = {};

      // Simple validation logic (extensible)
      const requiredFields = document.querySelectorAll('[aria-required="true"]');
      requiredFields.forEach((field) => {
         const name = (field as HTMLInputElement).name;
         if (!formData[name] || (Array.isArray(formData[name]) && formData[name].length === 0)) {
            newErrors[name] = "This field is required";
         }
      });

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      Object.keys(formData).forEach(key => {
         if (key.toLowerCase().includes('email') && formData[key] && !emailRegex.test(formData[key])) {
            newErrors[key] = "Please enter a valid email address";
         }
      });

      if (!formData.terms) newErrors.terms = "You must accept the terms and conditions";
      if (!formData.mediaConsent) newErrors.mediaConsent = "Media consent is required";

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!validate()) {
         // Scroll to first error
         const firstError = document.querySelector('[aria-invalid="true"]');
         if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            (firstError as HTMLElement).focus();
         }
         return;
      }

      setStatus('submitting');
      setTimeout(() => {
         setStatus('success');
         window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 2000);
   };

   // --- SUCCESS STATE ---
   if (status === 'success') {
      return (
         <section className="bg-tcl-off-white py-20">
            <div className="max-w-3xl mx-auto px-6">
               <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl border border-tcl-light-gray shadow-layered p-8 md:p-12 text-center border-t-[3px] border-t-tcl-green"
               >
                  <motion.div
                     initial={{ scale: 0 }}
                     animate={{ scale: 1 }}
                     transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                     className="inline-flex mb-6"
                  >
                     <CheckCircle weight="fill" size={72} className="text-tcl-green" />
                  </motion.div>

                  <motion.h2
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.3 }}
                     className="font-barlow-condensed font-bold text-3xl text-tcl-navy uppercase mb-2"
                  >
                     Registration Complete!
                  </motion.h2>

                  <motion.p
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.4 }}
                     className="font-source-sans text-lg text-[#555] mb-8"
                  >
                     Thank you for registering with Cricket Texoma.
                  </motion.p>

                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.5 }}
                     className="bg-tcl-off-white rounded-xl p-6 max-w-md mx-auto mb-8 text-left"
                  >
                     <h3 className="font-barlow-condensed font-semibold text-[14px] text-tcl-crimson uppercase tracking-wide mb-4 text-center">What Happens Next</h3>
                     <div className="space-y-4">
                        <div className="flex items-start gap-3">
                           <EnvelopeSimple weight="bold" size={18} className="text-tcl-crimson mt-0.5 shrink-0" />
                           <p className="font-source-sans text-[15px] text-[#555]">You&apos;ll receive a confirmation email at <strong>{formData.email}</strong> shortly.</p>
                        </div>
                        <div className="flex items-start gap-3">
                           <Clock weight="bold" size={18} className="text-tcl-crimson mt-0.5 shrink-0" />
                           <p className="font-source-sans text-[15px] text-[#555]">Our team will review your registration within 2–3 business days.</p>
                        </div>
                        <div className="flex items-start gap-3">
                           <ChatCircle weight="bold" size={18} className="text-tcl-crimson mt-0.5 shrink-0" />
                           <p className="font-source-sans text-[15px] text-[#555]">We&apos;ll reach out with next steps and any additional information needed.</p>
                        </div>
                     </div>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.6 }}
                     className="flex flex-col sm:flex-row justify-center gap-4"
                  >
                     <Link href="/" className="px-8 py-3 rounded-full border border-tcl-navy text-tcl-navy font-barlow-condensed font-semibold uppercase text-sm hover:bg-tcl-navy hover:text-white transition-colors text-center">
                        Back to Home
                     </Link>
                     <Link href="/tournaments" className="px-8 py-3 flex items-center justify-center gap-2 text-tcl-crimson font-barlow-condensed font-semibold uppercase text-sm hover:underline">
                        View Tournaments <ArrowRight weight="bold" />
                     </Link>
                  </motion.div>
               </motion.div>
            </div>
         </section>
      );
   }

   // --- MAIN FORM ---
   return (
      <section className="bg-tcl-off-white py-12 md:py-20">
         <div className="max-w-3xl mx-auto px-4 md:px-6">

            {/* Main Card */}
            <div className="bg-white rounded-2xl border border-tcl-light-gray shadow-layered p-5 md:p-8 border-t-[3px] border-t-tcl-crimson relative">

               {/* Progress Indicator (Simple) */}
               <div className="absolute top-0 right-0 left-0 h-10 flex items-center justify-center gap-4 bg-white border-b border-tcl-light-gray rounded-t-[13px] z-10 px-4">
                  <div className="flex items-center gap-2">
                     <div className={`w-2 h-2 rounded-full ${selectedType ? 'bg-tcl-green' : 'bg-tcl-crimson animate-pulse'}`}></div>
                     <span className={`font-barlow-condensed font-bold text-[10px] uppercase tracking-widest ${selectedType ? 'text-tcl-navy' : 'text-tcl-crimson'}`}>Type</span>
                  </div>
                  <div className="w-8 h-[1px] bg-tcl-light-gray"></div>
                  <div className="flex items-center gap-2">
                     <div className={`w-2 h-2 rounded-full border ${selectedType ? 'border-tcl-crimson bg-tcl-crimson' : 'border-tcl-light-gray'}`}></div>
                     <span className={`font-barlow-condensed font-bold text-[10px] uppercase tracking-widest ${selectedType ? 'text-tcl-navy' : 'text-[#CCC]'}`}>Details</span>
                  </div>
               </div>

               <FormContext.Provider value={{ formData, errors, handleChange, handleMultiSelect }}>
                  <form ref={formRef} onSubmit={handleSubmit} className="mt-12" noValidate>

                     {/* Error Banner */}
                     <AnimatePresence>
                        {Object.keys(errors).length > 0 && (
                           <motion.div
                              initial={{ opacity: 0, y: -10, height: 0 }}
                              animate={{ opacity: 1, y: 0, height: 'auto' }}
                              exit={{ opacity: 0, y: -10, height: 0 }}
                              className="bg-tcl-crimson/5 border border-tcl-crimson/10 rounded-lg p-4 mb-8 flex items-start gap-3"
                           >
                              <WarningCircle weight="fill" size={24} className="text-tcl-crimson shrink-0" />
                              <div>
                                 <h4 className="font-source-sans font-semibold text-tcl-crimson text-[15px]">Please check the form</h4>
                                 <p className="font-source-sans text-[13px] text-tcl-crimson/80">Some fields are missing or invalid. Please correct the highlighted fields below.</p>
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>

                     {/* Phase 1: Type Selector */}
                     <div className="mb-10">
                        <div className="flex items-center gap-3 mb-2">
                           <div className="w-[52px] h-[52px] rounded-lg bg-tcl-navy/5 flex items-center justify-center">
                              <UserCirclePlus weight="bold" size={28} className="text-tcl-crimson" />
                           </div>
                           <div>
                              <h2 className="font-barlow-condensed font-bold text-[18px] text-tcl-navy uppercase">Select Your Registration Type</h2>
                              <p className="font-source-sans text-[14px] text-[#666]">Choose the option that best describes you.</p>
                           </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-6">
                           {REG_TYPES.map((type) => (
                              <button
                                 key={type.id}
                                 type="button"
                                 onClick={() => handleTypeSelect(type.id)}
                                 className={`
                             relative p-4 rounded-xl border-[1.5px] text-center transition-all duration-200 group flex flex-col items-center gap-2
                             ${selectedType === type.id
                                       ? 'bg-tcl-crimson/5 border-tcl-crimson shadow-sm'
                                       : 'bg-tcl-input-bg border-tcl-light-gray hover:border-tcl-crimson hover:bg-tcl-crimson/5'}
                          `}
                                 role="radio"
                                 aria-checked={selectedType === type.id}
                              >
                                 {selectedType === type.id && (
                                    <div className="absolute top-2 right-2 text-tcl-crimson">
                                       <CheckCircle weight="fill" size={18} />
                                    </div>
                                 )}
                                 <type.icon weight="bold" size={24} className={`transition-colors ${selectedType === type.id ? 'text-tcl-crimson' : 'text-tcl-navy group-hover:text-tcl-crimson'}`} />
                                 <div>
                                    <span className="block font-barlow-condensed font-bold text-[15px] text-tcl-navy uppercase leading-tight">{type.label}</span>
                                    <span className="block font-source-sans text-[11px] text-[#999] mt-0.5">{type.sub}</span>
                                 </div>
                              </button>
                           ))}
                        </div>
                     </div>

                     {/* Divider */}
                     {selectedType && <div className="w-full h-[1px] bg-tcl-light-gray my-8"></div>}

                     {/* Phase 2: Adaptive Fields */}
                     <AnimatePresence mode="wait">
                        {selectedType && (
                           <motion.div
                              id="reg-form-fields"
                              key={selectedType}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.3 }}
                              className="space-y-8"
                           >
                              {/* TYPE: PLAYER */}
                              {selectedType === 'player' && (
                                 <>
                                    {/* Parent Group */}
                                    <div className="bg-tcl-navy/[0.02] rounded-lg p-5 border border-tcl-light-gray/50">
                                       <div className="flex items-center gap-2 mb-4">
                                          <UserCircle weight="bold" size={18} className="text-tcl-navy" />
                                          <h3 className="font-barlow-condensed font-medium text-[14px] text-tcl-navy uppercase tracking-[0.06em]">Parent / Guardian Information</h3>
                                       </div>
                                       <div className="grid grid-cols-2 gap-5">
                                          <Input name="parentFirstName" label="First Name" placeholder="First name" required half />
                                          <Input name="parentLastName" label="Last Name" placeholder="Last name" required half />
                                          <Input name="parentEmail" label="Email Address" type="email" placeholder="you@example.com" required />
                                          <Input name="parentPhone" label="Phone Number" type="tel" placeholder="(xxx) xxx-xxxx" required />
                                          <Select name="relationship" label="Relationship to Player" options={['Parent', 'Legal Guardian', 'Other']} required />
                                       </div>
                                    </div>

                                    {/* Player Group */}
                                    <div className="bg-tcl-navy/[0.02] rounded-lg p-5 border border-tcl-light-gray/50">
                                       <div className="flex items-center gap-2 mb-4">
                                          <UserFocus weight="bold" size={18} className="text-tcl-navy" />
                                          <h3 className="font-barlow-condensed font-medium text-[14px] text-tcl-navy uppercase tracking-[0.06em]">Player Information</h3>
                                       </div>
                                       <div className="grid grid-cols-2 gap-5">
                                          <Input name="playerFirstName" label="Player First Name" placeholder="Player's first name" required half />
                                          <Input name="playerLastName" label="Player Last Name" placeholder="Player's last name" required half />
                                          <Input name="dob" label="Date of Birth" type="date" required helper="Used to determine age group eligibility" />
                                          <Select name="gender" label="Gender" options={['Male', 'Female', 'Prefer not to say']} required />
                                          <Select name="ageGroup" label="Age Group" options={['U8', 'U9', 'U10', 'U11', 'U12', 'U13', 'U14', 'U15', 'U16', 'U17', 'U18', 'U19']} required helper="Age as of Jan 1st" />
                                          <Select name="role" label="Playing Role" options={['Batsman', 'Bowler', 'All-Rounder', 'Wicketkeeper']} />
                                          <Select name="experience" label="Experience Level" options={['Beginner (0-1 yrs)', 'Intermediate (2-3 yrs)', 'Experienced (4+ yrs)', 'Academy Trained']} />
                                          <Input name="currentAcademy" label="Current Academy / Club" placeholder="Academy name (if any)" />
                                          <Textarea name="medical" label="Medical Conditions / Allergies" placeholder="Any medical conditions we should be aware of" helper={<><Lock weight="bold" size={12} className="text-tcl-crimson" /> Confidential and shared only with coaching staff.</>} />
                                       </div>
                                    </div>
                                 </>
                              )}

                              {/* TYPE: TEAM */}
                              {selectedType === 'team' && (
                                 <>
                                    <div className="bg-tcl-navy/[0.02] rounded-lg p-5 border border-tcl-light-gray/50">
                                       <div className="flex items-center gap-2 mb-4">
                                          <User weight="bold" size={18} className="text-tcl-navy" />
                                          <h3 className="font-barlow-condensed font-medium text-[14px] text-tcl-navy uppercase tracking-[0.06em]">Team Manager / Contact</h3>
                                       </div>
                                       <div className="grid grid-cols-2 gap-5">
                                          <Input name="managerName" label="Full Name" placeholder="Manager's full name" required />
                                          <Input name="managerEmail" label="Email Address" type="email" placeholder="you@example.com" required />
                                          <Input name="managerPhone" label="Phone Number" type="tel" placeholder="(xxx) xxx-xxxx" required />
                                          <Select name="managerRole" label="Role" options={['Head Coach', 'Team Manager', 'Academy Director', 'Other']} required />
                                       </div>
                                    </div>

                                    <div className="bg-tcl-navy/[0.02] rounded-lg p-5 border border-tcl-light-gray/50">
                                       <div className="flex items-center gap-2 mb-4">
                                          <UsersThree weight="bold" size={18} className="text-tcl-navy" />
                                          <h3 className="font-barlow-condensed font-medium text-[14px] text-tcl-navy uppercase tracking-[0.06em]">Team Information</h3>
                                       </div>
                                       <div className="grid grid-cols-2 gap-5">
                                          <Input name="teamName" label="Team Name" placeholder="Your team name" required />
                                          <Input name="teamAffiliation" label="Academy / Club Affiliation" placeholder="Affiliated academy (if any)" />
                                          <Select name="teamAgeGroup" label="Age Group" options={['U8', 'U9', 'U10', 'U11', 'U12', 'U13', 'U14', 'U15', 'U16', 'U17', 'U18', 'U19']} required />
                                          <Select name="playerCount" label="Number of Players" options={['8-11', '12-15', '16-20', '20+']} required />
                                          <Input name="teamLocation" label="Home City / Region" placeholder="City, State" required />
                                          <CheckboxGroup name="seasons" label="Preferred Seasons" options={['Spring', 'Summer', 'Nationals', 'Fall', 'Winter']} />
                                       </div>
                                    </div>
                                 </>
                              )}

                              {/* TYPE: ACADEMY */}
                              {selectedType === 'academy' && (
                                 <div className="bg-tcl-navy/[0.02] rounded-lg p-5 border border-tcl-light-gray/50">
                                    <div className="flex items-center gap-2 mb-4">
                                       <Buildings weight="bold" size={18} className="text-tcl-navy" />
                                       <h3 className="font-barlow-condensed font-medium text-[14px] text-tcl-navy uppercase tracking-[0.06em]">Academy Information</h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-5">
                                       <Input name="academyName" label="Academy Name" placeholder="Your academy name" required />
                                       <Input name="contactPerson" label="Contact Person" placeholder="Full name" required />
                                       <Input name="email" label="Email Address" type="email" placeholder="you@example.com" required />
                                       <Input name="phone" label="Phone Number" type="tel" placeholder="(xxx) xxx-xxxx" required />
                                       <Input name="location" label="City, State" placeholder="City, State" required />
                                       <Select name="size" label="Number of Active Players" options={['Under 25', '25-50', '50-100', '100-200', '200+']} required />
                                       <CheckboxGroup name="ageGroupsServed" label="Age Groups Served" options={['U8-U10', 'U11-U13', 'U14-U16', 'U17-U19']} required />
                                       <Select name="tier" label="Interested Partner Tier" options={['Founding Partner', 'National Partner', 'Regional Partner', 'Development Partner', 'Not sure yet']} />
                                       <Textarea name="notes" label="Additional Notes" placeholder="Anything else you'd like us to know" />
                                    </div>
                                 </div>
                              )}

                              {/* TYPE: ADULT */}
                              {selectedType === 'adult' && (
                                 <div className="bg-tcl-navy/[0.02] rounded-lg p-5 border border-tcl-light-gray/50">
                                    <div className="flex items-center gap-2 mb-4">
                                       <Person weight="bold" size={18} className="text-tcl-navy" />
                                       <h3 className="font-barlow-condensed font-medium text-[14px] text-tcl-navy uppercase tracking-[0.06em]">Player Information</h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-5">
                                       <Input name="fullName" label="Full Name" placeholder="Your full name" required />
                                       <Input name="email" label="Email Address" type="email" placeholder="you@example.com" required />
                                       <Input name="phone" label="Phone Number" type="tel" placeholder="(xxx) xxx-xxxx" required />
                                       <Input name="dob" label="Date of Birth" type="date" required helper="Must be 18 or older" />
                                       <Select name="role" label="Playing Role" options={['Batsman', 'Bowler', 'All-Rounder', 'Wicketkeeper']} />
                                       <Select name="experience" label="Experience Level" options={['Beginner', 'Intermediate', 'Experienced', 'Former Professional']} />
                                       <Select name="program" label="Preferred Program" options={['Weekend Warriors', 'Indoor Cricket', 'Corporate League', 'Private Coaching']} required />
                                       <Select name="referral" label="How Did You Hear About TCL?" options={['Social Media', 'Friend/Family', 'Google Search', 'Local Event', 'Cricket Community', 'Other']} />
                                    </div>
                                 </div>
                              )}

                              {/* TYPE: COACH */}
                              {selectedType === 'coach' && (
                                 <div className="bg-tcl-navy/[0.02] rounded-lg p-5 border border-tcl-light-gray/50">
                                    <div className="flex items-center gap-2 mb-4">
                                       <Megaphone weight="bold" size={18} className="text-tcl-navy" />
                                       <h3 className="font-barlow-condensed font-medium text-[14px] text-tcl-navy uppercase tracking-[0.06em]">Coach Information</h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-5">
                                       <Input name="fullName" label="Full Name" placeholder="Your full name" required />
                                       <Input name="email" label="Email Address" type="email" placeholder="you@example.com" required />
                                       <Input name="phone" label="Phone Number" type="tel" placeholder="(xxx) xxx-xxxx" required />
                                       <Input name="currentAcademy" label="Current Academy / Club" placeholder="Academy or club name (if any)" />
                                       <Select name="experience" label="Coaching Experience" options={['1-2 years', '3-5 years', '5-10 years', '10+ years']} required />
                                       <Input name="certs" label="Coaching Certifications" placeholder="List certifications" />
                                       <CheckboxGroup name="ageGroups" label="Age Groups Coached" options={['U8-U10', 'U11-U13', 'U14-U16', 'U17-U19', 'Adults']} required />
                                       <Select name="specialization" label="Specialization" options={['Batting Coach', 'Bowling Coach', 'Fielding Coach', 'All-Round', 'Wicketkeeping Coach', 'Fitness/Conditioning']} />
                                       <Textarea name="notes" label="Additional Notes" placeholder="Tell us about your coaching experience and goals" />
                                    </div>
                                 </div>
                              )}

                              {/* TYPE: UMPIRE */}
                              {selectedType === 'umpire' && (
                                 <div className="bg-tcl-navy/[0.02] rounded-lg p-5 border border-tcl-light-gray/50">
                                    <div className="flex items-center gap-2 mb-4">
                                       <Notepad weight="bold" size={18} className="text-tcl-navy" />
                                       <h3 className="font-barlow-condensed font-medium text-[14px] text-tcl-navy uppercase tracking-[0.06em]">Official Information</h3>
                                    </div>
                                    <div className="grid grid-cols-2 gap-5">
                                       <Input name="fullName" label="Full Name" placeholder="Your full name" required />
                                       <Input name="email" label="Email Address" type="email" placeholder="you@example.com" required />
                                       <Input name="phone" label="Phone Number" type="tel" placeholder="(xxx) xxx-xxxx" required />
                                       <Select name="role" label="Role" options={['Umpire', 'Scorer', 'Both']} required />
                                       <Select name="experience" label="Experience Level" options={['Beginner', 'Intermediate', 'Experienced', 'Certified']} required />
                                       <Input name="certs" label="Certifications" placeholder="List officiating certifications" />
                                       <CheckboxGroup name="availability" label="Availability" options={['Weekdays', 'Weekends', 'Spring', 'Summer', 'Fall', 'Winter']} />
                                       <Textarea name="notes" label="Additional Notes" placeholder="Anything else you'd like us to know" />
                                    </div>
                                 </div>
                              )}
                           </motion.div>
                        )}
                     </AnimatePresence>

                     {/* Phase 3: Universal (Always visible if type selected) */}
                     <AnimatePresence>
                        {selectedType && (
                           <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2 }}
                              className="mt-8 pt-8 border-t border-tcl-light-gray"
                           >
                              <div className="flex items-center gap-2 mb-6">
                                 <ClipboardText weight="bold" size={18} className="text-tcl-navy" />
                                 <h3 className="font-barlow-condensed font-medium text-[14px] text-tcl-navy uppercase tracking-[0.06em]">Final Details</h3>
                              </div>

                              <div className="space-y-6">
                                 {selectedType !== 'adult' && (
                                    <div className="grid grid-cols-1 md:grid-cols-2">
                                       <Select name="referral" label="How Did You Hear About TCL?" options={['Social Media', 'Friend/Family', 'Google Search', 'Local Event', 'Cricket Community', 'Academy Referral', 'Other']} />
                                    </div>
                                 )}

                                 <div className="space-y-4">
                                    {/* Terms */}
                                    <label className="flex items-start gap-3 cursor-pointer group">
                                       <div className="relative mt-0.5">
                                          <input
                                             type="checkbox"
                                             name="terms"
                                             checked={formData.terms}
                                             onChange={handleChange}
                                             className="peer sr-only"
                                             aria-required="true"
                                          />
                                          <div className="w-5 h-5 rounded-md border-[1.5px] border-tcl-light-gray bg-tcl-input-bg peer-checked:bg-tcl-crimson peer-checked:border-tcl-crimson transition-all duration-200 flex items-center justify-center group-hover:border-tcl-crimson/50">
                                             <Check weight="bold" size={14} className="text-white opacity-0 peer-checked:opacity-100" />
                                          </div>
                                       </div>
                                       <span className={`font-source-sans text-[14px] ${errors.terms ? 'text-tcl-crimson' : 'text-[#555]'}`}>
                                          I agree to the <a href="/terms" className="text-tcl-crimson underline decoration-1 underline-offset-2 hover:text-tcl-crimson-dark">Terms and Conditions</a>, including the code of conduct and participant guidelines. <span className="text-tcl-crimson">*</span>
                                       </span>
                                    </label>

                                    {/* Media Consent */}
                                    <label className="flex items-start gap-3 cursor-pointer group">
                                       <div className="relative mt-0.5">
                                          <input
                                             type="checkbox"
                                             name="mediaConsent"
                                             checked={formData.mediaConsent}
                                             onChange={handleChange}
                                             className="peer sr-only"
                                             aria-required="true"
                                          />
                                          <div className="w-5 h-5 rounded-md border-[1.5px] border-tcl-light-gray bg-tcl-input-bg peer-checked:bg-tcl-crimson peer-checked:border-tcl-crimson transition-all duration-200 flex items-center justify-center group-hover:border-tcl-crimson/50">
                                             <Check weight="bold" size={14} className="text-white opacity-0 peer-checked:opacity-100" />
                                          </div>
                                       </div>
                                       <span className={`font-source-sans text-[14px] ${errors.mediaConsent ? 'text-tcl-crimson' : 'text-[#555]'}`}>
                                          I consent to photographs and videos taken during TCL events being used for promotional purposes. <span className="text-tcl-crimson">*</span>
                                       </span>
                                    </label>

                                    {/* Newsletter */}
                                    <label className="flex items-start gap-3 cursor-pointer group">
                                       <div className="relative mt-0.5">
                                          <input
                                             type="checkbox"
                                             name="newsletter"
                                             checked={formData.newsletter}
                                             onChange={handleChange}
                                             className="peer sr-only"
                                          />
                                          <div className="w-5 h-5 rounded-md border-[1.5px] border-tcl-light-gray bg-tcl-input-bg peer-checked:bg-tcl-crimson peer-checked:border-tcl-crimson transition-all duration-200 flex items-center justify-center group-hover:border-tcl-crimson/50">
                                             <Check weight="bold" size={14} className="text-white opacity-0 peer-checked:opacity-100" />
                                          </div>
                                       </div>
                                       <span className="font-source-sans text-[14px] text-[#555]">
                                          Keep me updated with TCL news, events, and announcements via email.
                                       </span>
                                    </label>
                                 </div>

                                 <div className="flex items-center gap-2 text-[#999] mt-2">
                                    <Lock weight="bold" size={14} className="text-tcl-crimson" />
                                    <span className="font-source-sans text-[13px]">Your information is kept secure and will only be used for TCL registration purposes.</span>
                                 </div>

                                 <div className="pt-6">
                                    <button
                                       type="submit"
                                       disabled={status === 'submitting'}
                                       className={`
                                   w-full h-16 rounded-xl font-barlow-condensed font-bold text-[16px] uppercase tracking-wide flex items-center justify-center gap-3 transition-all duration-200 shadow-lg relative overflow-hidden group
                                   ${status === 'submitting'
                                             ? 'bg-tcl-navy cursor-not-allowed text-white/80'
                                             : 'bg-tcl-crimson text-white hover:bg-tcl-crimson-bright hover:shadow-tcl-crimson/30 hover:scale-[1.01] active:scale-[0.99]'}
                                `}
                                    >
                                       {status === 'submitting' ? (
                                          <>
                                             <span>Processing...</span>
                                             <CircleNotch weight="bold" size={20} className="animate-spin" />
                                          </>
                                       ) : (
                                          <>
                                             <span className="relative z-10">Complete Registration</span>
                                             <CheckCircle weight="bold" size={20} className="relative z-10" />
                                             {/* Shimmer effect */}
                                             <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>
                                          </>
                                       )}
                                    </button>
                                 </div>
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </form>
               </FormContext.Provider>
            </div>
         </div>
      </section>
   );
};

export default RegisterForm;
