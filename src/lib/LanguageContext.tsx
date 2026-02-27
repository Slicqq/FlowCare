'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type LanguageCode = 'en' | 'hi' | 'mr';

interface Translations {
    [key: string]: string;
}

interface AllTranslations {
    [key: string]: Translations;
}

const MOCK_TRANSLATIONS: AllTranslations = {
    'en': {
        'main_heading': 'Predict Your Wait. <span class="flowcare-primary-text">Reclaim Your Time.</span>',
        'landing_tagline': 'FlowCare is the definitive med-tech solution providing patients with real-time clinic traffic data for smart booking, and empowering providers with visual insights to optimize staff, minimize bottlenecks, and significantly reduce wait times.',
        'card_patient_heading': 'Smart Booking (Patient Focus)',
        'card_patient_text': 'Find clinics by real-time traffic index, not just distance. See expected wait times before you leave the house and book the fastest available slot.',
        'card_provider_heading': 'Optimize Operations (Provider Focus)',
        'card_provider_text': 'Gain visual insights into peak/off-peak traffic patterns. Manage your queue digitally and improve patient satisfaction scores immediately.',
        'guide_heading': 'Quick Start Guide: How FlowCare Works',
        'guide_text': 'A simple, step-by-step video guide for our users, especially those new to online booking systems. Learn how to check traffic, find a low-wait clinic, and book your appointment easily.',
        'process_heading': 'The FlowCare Process in 3 Steps:',
        'step1_title': '1. Check Traffic',
        'step1_text': "FlowCare's system constantly updates facility capacity and patient load, resulting in a live Traffic Index (Low, Moderate, High).",
        'step2_title': '2. Book Smart',
        'step2_text': 'Patients select the best time/location based on predicted flow, or providers manage their internal queue visually.',
        'step3_title': '3. Provider Optimized',
        'step3_text': 'This transparency allows clinics to optimize staffing and space utilization, leading to a better experience for everyone.',
        'mission_heading': 'Our Mission: Trust Through Transparency',
        'mission_text': "We believe waiting shouldn't be a guessing game. FlowCare uses proprietary machine learning models to analyze patient check-in times, doctor availability, and facility capacity, translating complex data into a simple, color-coded index that saves you time and reduces stress for your staff.",
        'trusted_by': 'Trusted by Leading Healthcare Systems',
        'pricing_heading': 'Pricing',
        'pricing_text': 'Patient access is <strong>always free</strong>.',
        'contact_heading': 'Get In Touch',
        'contact_text': "Email us at support@flowcare.com or call +91 98765 43210. We're ready to answer your questions.",
        'contact_send': 'Send Message',
        'login_cta_heading': 'Ready to get started?',
        'login_create': 'Create Account / Register Clinic',
        'login_signin': 'Already a user? Sign In',
        'nav_about': 'About Us', 'nav_howitworks': 'How It Works', 'nav_pricing': 'Pricing', 'nav_contact': 'Contact', 'nav_signup': 'Sign Up',
        'reg_title': 'New User/Provider Registration', 'reg_account_type': 'Account Type', 'reg_option_patient': 'Patient Account', 'reg_option_provider': 'Healthcare Provider/Clinic', 'reg_email_label': 'Email Address', 'reg_password_label': 'Password', 'reg_phone_label': 'Mobile Number', 'reg_button': 'Register Account', 'login_signin_text': 'Sign In',
        'login_patient_title': 'Patient Login', 'login_button': 'Sign In', 'login_button_otp': 'Send OTP', 'login_forgot_password': 'Forgot Password?', 'login_new_patient': 'New Patient?', 'login_signup_here': 'Sign Up Here', 'login_provider_title': 'Provider Login', 'login_provider_id': 'Clinic ID / Email', 'login_button_provider': 'Log In', 'login_new_provider': 'New Provider?', 'login_register_clinic': 'Register Clinic', 'login_choice_title': 'Sign In As...',
        'dashboard_find_clinics': 'Dashboard (Find Clinics)', 'dashboard_my_appointments': 'My Appointments', 'dashboard_logout': 'Logout', 'find_clinics_heading': 'Find Clinics: Real-Time Traffic', 'next_appt_heading': 'Your Next Appointment', 'confirmed': 'Confirmed',
        'search_filter_heading': 'Search & Filter', 'specialty_all': 'All Specialties', 'dashboard_my_appointments_heading': 'My Appointments History', 'upcoming': 'Upcoming', 'completed': 'Completed', 'appt_cancel': 'Cancel', 'appt_view_details': 'View Details', 'appt_view_summary': 'View Summary', 'new_appt_cta': 'Need a new appointment?', 'find_clinic_now': 'Find a Clinic Now',
        'dashboard_queue': 'Dashboard (Queue)', 'dashboard_analytics': 'Analytics', 'provider_dashboard_heading': 'Provider Dashboard: Clinic Flow Management', 'queue_status_heading': 'Real-Time Clinic Status: Urgent Care Wing', 'queue_traffic_level': 'Current Traffic Level', 'queue_wait_time': 'Wait Time (Estimated)', 'queue_patients_waiting': 'Patients Waiting', 'queue_active_heading': 'Active Patient Queue', 'queue_checkin_time': 'Check-In:', 'queue_waiting': 'Waiting', 'queue_move_room': 'Move', 'queue_in_room': 'In Room', 'queue_mark_complete': 'Complete',
        'analytics_heading': 'Flow Analytics & Performance', 'analytics_chart_heading': 'Average Daily Wait Times (Last 30 Days)', 'analytics_avg_wait_time': 'Average Wait Time', 'analytics_appts_booked': 'Appointments Booked', 'analytics_peak_hour': 'Peak Hour (Avg)', 'analytics_flow_score': 'Flow Score Improvement',
        'modal_lang_select_heading': 'Select Language', 'modal_lang_select_text': 'Choose your preferred language for this website.', 'modal_continue_en': 'Continue in English', 'modal_booking_title': 'Book Appointment', 'booking_select_slot': 'Select an Available Slot:', 'modal_confirm_appt': 'Confirm Appointment', 'booking_optional_note': 'Optional Note for Clinic (e.g., reason for visit)',
        'language_set': 'Language set to English.', 'default_lang_code': 'en', 'book_appointment': 'Book Appointment', 'add_patient_btn': 'Add Patient to Queue', 'add_patient_name': 'Patient Name', 'add_patient_phone': 'Contact Number', 'add_patient_reason': 'Reason for Visit'
    },
    'hi': {
        'main_heading': 'अपनी प्रतीक्षा का अनुमान लगाएं। <span class="flowcare-primary-text">अपना समय वापस पाएं।</span>',
        'landing_tagline': 'फ्लोकेयर एक निश्चित मेड-टेक समाधान है जो मरीजों को स्मार्ट बुकिंग के लिए वास्तविक समय में क्लिनिक ट्रैफिक डेटा प्रदान करता है, और प्रदाताओं को कर्मचारियों को अनुकूलित करने, बाधाओं को कम करने और प्रतीक्षा समय को काफी हद तक कम करने के लिए दृश्य अंतर्दृष्टि के साथ सशक्त बनाता है।',
        'card_patient_heading': 'स्मार्ट बुकिंग (मरीज पर ध्यान)', 'card_patient_text': 'वास्तविक समय के ट्रैफिक इंडेक्स से क्लीनिक खोजें, केवल दूरी से नहीं। घर से निकलने से पहले अनुमानित प्रतीक्षा समय देखें और सबसे तेज़ उपलब्ध स्लॉट बुक करें।',
        'card_provider_heading': 'ऑपरेशन्स को अनुकूलित करें (प्रदाता पर ध्यान)', 'card_provider_text': 'पीक/ऑफ-पीक ट्रैफिक पैटर्न में दृश्य अंतर्दृष्टि प्राप्त करें। अपनी कतार को डिजिटल रूप से प्रबंधित करें और रोगी संतुष्टि स्कोर में तुरंत सुधार करें।',
        'guide_heading': 'त्वरित प्रारंभ मार्गदर्शिका: फ्लोकेयर कैसे काम करता है', 'guide_text': 'हमारे उपयोगकर्ताओं के लिए एक सरल, चरण-दर-चरण वीडियो मार्गदर्शिका, विशेष रूप से ऑनलाइन बुकिंग सिस्टम के लिए नए लोगों के लिए। जानें कि ट्रैफिक कैसे जांचें, कम प्रतीक्षा वाला क्लिनिक कैसे ढूंढें, और अपनी अपॉइंटमेंट आसानी से बुक करें।',
        'process_heading': 'फ्लोकेयर प्रक्रिया 3 चरणों में:', 'step1_title': '1. ट्रैफिक जांचें', 'step1_text': 'फ्लोकेयर का सिस्टम लगातार सुविधा क्षमता और रोगी लोड को अपडेट करता है, जिसके परिणामस्वरूप एक लाइव ट्रैफिक इंडेक्स (कम, मध्यम, उच्च) प्राप्त होता है।',
        'step2_title': '2. स्मार्ट बुक करें', 'step2_text': 'रोगी अनुमानित प्रवाह के आधार पर सबसे अच्छा समय/स्थान चुनते हैं, या प्रदाता अपनी आंतरिक कतार को दृश्य रूप से प्रबंधित करते हैं।', 'step3_title': '3. प्रदाता अनुकूलित', 'step3_text': 'यह पारदर्शिता क्लीनिकों को स्टाफिंग और अंतरिक्ष उपयोग को अनुकूलित करने की अनुमति देती है, जिससे सभी के लिए बेहतर अनुभव मिलता है।',
        'mission_heading': 'हमारा मिशन: पारदर्शिता के माध्यम से विश्वास', 'mission_text': 'हम मानते हैं कि प्रतीक्षा करना एक अनुमान लगाने का खेल नहीं होना चाहिए। फ्लोकेयर रोगी चेक-इन समय, डॉक्टर की उपलब्धता, और सुविधा क्षमता का विश्लेषण करने के लिए मालिकाना मशीन लर्निंग मॉडल का उपयोग करता है, जटिल डेटा को एक सरल, रंग-कोडित इंडेक्स में बदल देता है जो आपका समय बचाता है और आपके कर्मचारियों के लिए तनाव कम करता है।',
        'trusted_by': 'प्रमुख स्वास्थ्य सेवा प्रणालियों द्वारा विश्वसनीय',
        'pricing_heading': 'मूल्य निर्धारण',
        'pricing_text': 'रोगी पहुंच <strong>हमेशा मुफ्त</strong> है।',
        'contact_heading': 'संपर्क करें',
        'contact_text': "हमें support@flowcare.com पर ईमेल करें या +91 98765 43210 पर कॉल करें। हम आपके सवालों का जवाब देने के लिए तैयार हैं।",
        'contact_send': 'संदेश भेजें', 'login_cta_heading': 'शुरुआत करने के लिए तैयार हैं?', 'login_create': 'खाता बनाएं / क्लिनिक पंजीकृत करें', 'login_signin': 'पहले से उपयोगकर्ता हैं? साइन इन करें',
        'nav_about': 'हमारे बारे में', 'nav_howitworks': 'यह कैसे काम करता है', 'nav_pricing': 'मूल्य निर्धारण', 'nav_contact': 'संपर्क', 'nav_signup': 'साइन अप करें',
        'reg_title': 'नया उपयोगकर्ता/प्रदाता पंजीकरण', 'reg_account_type': 'खाता प्रकार', 'reg_option_patient': 'रोगी खाता', 'reg_option_provider': 'स्वास्थ्य सेवा प्रदाता/क्लिनिक', 'reg_email_label': 'ईमेल एड्रेस', 'reg_password_label': 'पासवर्ड', 'reg_phone_label': 'मोबाइल नंबर', 'reg_button': 'खाता पंजीकृत करें', 'login_signin_text': 'साइन इन करें',
        'login_patient_title': 'रोगी लॉगिन', 'login_button': 'साइन इन करें', 'login_button_otp': 'ओटीपी भेजें', 'login_forgot_password': 'पासवर्ड भूल गए?', 'login_new_patient': 'नए रोगी?', 'login_signup_here': 'यहां साइन अप करें', 'login_provider_title': 'प्रदाता लॉगिन', 'login_provider_id': 'क्लिनिक आईडी / ईमेल', 'login_button_provider': 'लॉग इन करें', 'login_new_provider': 'नए प्रदाता?', 'login_register_clinic': 'क्लिनिक पंजीकृत करें', 'login_choice_title': 'इस रूप में साइन इन करें...',
        'dashboard_find_clinics': 'डैशबोर्ड (क्लिनिक खोजें)', 'dashboard_my_appointments': 'मेरी अपॉइंटमेंट्स', 'dashboard_logout': 'लॉगआउट', 'find_clinics_heading': 'क्लिनिक खोजें: वास्तविक समय यातायात', 'next_appt_heading': 'आपकी अगली अपॉइंटमेंट', 'confirmed': 'पुष्टि की गई',
        'search_filter_heading': 'खोजें और फ़िल्टर करें', 'specialty_all': 'सभी विशेषताएँ', 'dashboard_my_appointments_heading': 'मेरी अपॉइंटमेंट्स का इतिहास', 'upcoming': 'आगामी', 'completed': 'पूर्ण', 'appt_cancel': 'रद्द करें', 'appt_view_details': 'विवरण देखें', 'appt_view_summary': 'सारांश देखें', 'new_appt_cta': 'एक नई अपॉइंटमेंट चाहिए?', 'find_clinic_now': 'अभी क्लिनिक खोजें',
        'dashboard_queue': 'डैशबोर्ड (कतार)', 'dashboard_analytics': 'विश्लेषण', 'provider_dashboard_heading': 'प्रदाता डैशबोर्ड: क्लिनिक प्रवाह प्रबंधन', 'queue_status_heading': 'वास्तविक समय क्लिनिक स्थिति: तत्काल देखभाल विंग', 'queue_traffic_level': 'वर्तमान यातायात स्तर', 'queue_wait_time': 'प्रतीक्षा समय (अनुमानित)', 'queue_patients_waiting': 'प्रतीक्षारत रोगी', 'queue_active_heading': 'सक्रिय रोगी कतार', 'queue_checkin_time': 'चेक-इन:', 'queue_waiting': 'प्रतीक्षा कर रहा है', 'queue_move_room': 'भेजें', 'queue_in_room': 'कमरे में', 'queue_mark_complete': 'पूर्ण',
        'analytics_heading': 'प्रवाह विश्लेषण और प्रदर्शन', 'analytics_chart_heading': 'औसत दैनिक प्रतीक्षा समय (पिछले 30 दिन)', 'analytics_avg_wait_time': 'औसत प्रतीक्षा समय', 'analytics_appts_booked': 'बुक की गई अपॉइंटमेंट्स', 'analytics_peak_hour': 'पीक घंटा (औसत)', 'analytics_flow_score': 'प्रवाह स्कोर सुधार',
        'modal_lang_select_heading': 'भाषा चुनें', 'modal_lang_select_text': 'इस वेबसाइट के लिए अपनी पसंदीदा भाषा चुनें।', 'modal_continue_en': 'अंग्रेजी में जारी रखें', 'modal_booking_title': 'अपॉइंटमेंट बुक करें', 'booking_select_slot': 'एक उपलब्ध स्लॉट चुनें:', 'modal_confirm_appt': 'अपॉइंटमेंट की पुष्टि करें', 'booking_optional_note': 'क्लिनिक के लिए वैकल्पिक नोट (जैसे, आने का कारण)',
        'language_set': 'भाषा हिंदी पर सेट है।', 'default_lang_code': 'hi', 'book_appointment': 'अपॉइंटमेंट बुक करें', 'add_patient_btn': 'रोगी को कतार में जोड़ें', 'add_patient_name': 'रोगी का नाम', 'add_patient_phone': 'संपर्क संख्या', 'add_patient_reason': 'मिलने का कारण'
    },
    'mr': {
        'main_heading': 'तुमच्या प्रतीक्षेचा अंदाज घ्या. <span class="flowcare-primary-text">तुमचा वेळ वाचवा.</span>',
        'landing_tagline': 'फ्लोकेअर हा एक निश्चित मेड-टेक उपाय आहे जो रुग्णांना स्मार्ट बुकिंगसाठी रिअल-टाइम क्लिनिक ट्रॅफिक डेटा प्रदान करतो आणि प्रदात्यांना कर्मचाऱ्यांची कार्यक्षमता वाढवण्यासाठी, अडथळे कमी करण्यासाठी आणि प्रतीक्षा वेळ लक्षणीयरीत्या कमी करण्यासाठी दृश्य अंतर्दृष्टीने सक्षम करतो।',
        'card_patient_heading': 'स्मार्ट बुकिंग (रुग्णांवर लक्ष केंद्रित)', 'card_patient_text': 'फक्त अंतरावरुन नाही, तर रिअल-टाइम ट्रॅफिक इंडेक्सवरून दवाखाने शोधा. तुम्ही घराबाहेर पडण्यापूर्वी अंदाजित प्रतीक्षा वेळ पहा आणि सर्वात जलद उपलब्ध स्लॉट बुक करा।',
        'card_provider_heading': 'ऑपरेशन्स ऑप्टिमाइझ करा (प्रदात्यांवर लक्ष केंद्रित)', 'card_provider_text': 'पीक/नॉन-पीक ट्रॅफिक पॅटर्नमध्ये दृश्य अंतर्दृष्टी मिळवा. तुमची रांग डिजिटली व्यवस्थापित करा आणि रुग्णांचे समाधान स्कोर त्वरित सुधारा।',
        'guide_heading': 'त्वरित प्रारंभ मार्गदर्शक: फ्लोकेअर कसे कार्य करते', 'guide_text': 'आमच्या वापरकर्त्यांसाठी, विशेषतः ऑनलाइन बुकिंग सिस्टमसाठी नवीन असलेल्यांसाठी एक साधे, चरण-दर-चरण व्हिडिओ मार्गदर्शक. ट्रॅफिक कसे तपासावे, कमी प्रतीक्षा असलेला क्लिनिक कसा शोधावा आणि तुमची अपॉइंटमेंट सहजपणे कशी बुक करावी हे शिका।',
        'process_heading': 'फ्लोकेअर प्रक्रिया 3 चरणांमध्ये:', 'step1_title': '1. ट्रॅफिक तपासा', 'step1_text': 'फ्लोकेअरची प्रणाली सुविधा क्षमता आणि रुग्ण लोड सतत अपडेट करते, ज्यामुळे थेट ट्रॅफिक इंडेक्स (कमी, मध्यम, उच्च) प्राप्त होतो।',
        'step2_title': '2. स्मार्ट बुकिंग', 'step2_text': 'रुग्ण अंदाजित प्रवाहावर आधारित सर्वोत्तम वेळ/ठिकाण निवडतात किंवा प्रदाता त्यांची अंतर्गत रांग दृश्यात्मकपणे व्यवस्थापित करतात।', 'step3_title': '3. प्रदाता ऑप्टिमाइझ्ड', 'step3_text': 'ही पारदर्शकता क्लिनिकला कर्मचारी आणि जागेचा वापर ऑप्टिमाइझ करण्याची परवानगी देते, ज्यामुळे प्रत्येकासाठी चांगला अनुभव मिळतो।',
        'mission_heading': 'आमचे ध्येय: पारदर्शकतेतून विश्वास', 'mission_text': 'आम्हाला विश्वास आहे की वाट पाहणे हा अंदाज लावण्याचा खेळ नसावा. फ्लोकेअर रुग्ण चेक-इन वेळ, डॉक्टरांची उपलब्धता आणि सुविधा क्षमतेचे विश्लेषण करण्यासाठी मालकीचे मशीन लर्निंग मॉडेल वापरतो, जटिल डेटाचे साधे, रंग-कोडित इंडेक्समध्ये भाषांतर करतो, ज्यामुळे तुमचा वेळ वाचतो आणि तुमच्या कर्मचाऱ्यांवरील ताण कमी होतो।',
        'trusted_by': 'प्रमुख आरोग्य सेवा प्रणालींद्वारे विश्वसनीय',
        'pricing_heading': 'किंमत',
        'pricing_text': 'रुग्णांसाठी प्रवेश <strong>नेहमी विनामूल्य</strong> असतो।',
        'contact_heading': 'संपर्क साधा',
        'contact_text': "आम्हाला support@flowcare.com वर ईमेल करा किंवा +91 98765 43210 वर कॉल करा. आम्ही तुमच्या प्रश्नांची उत्तरे देण्यासाठी तयार आहोत।",
        'contact_send': 'संदेश पाठवा', 'login_cta_heading': 'सुरुवात करण्यास तयार आहात?', 'login_create': 'खाते तयार करा / क्लिनिक नोंदणी करा', 'login_signin': 'आधीच वापरकर्ता आहात? साइन इन करा',
        'nav_about': 'आमच्याबद्दल', 'nav_howitworks': 'ते कसे कार्य करते', 'nav_pricing': 'किंमत', 'nav_contact': 'संपर्क', 'nav_signup': 'साइन अप करा',
        'reg_title': 'नवीन वापरकर्ता/प्रदाता नोंदणी', 'reg_account_type': 'खाते प्रकार', 'reg_option_patient': 'रुग्ण खाते', 'reg_option_provider': 'आरोग्य सेवा प्रदाता/दवाखाना', 'reg_email_label': 'ईमेल ॲड्रेस', 'reg_password_label': 'पासवर्ड', 'reg_phone_label': 'मोबाइल नंबर', 'reg_button': 'खाते नोंदणी करा', 'login_signin_text': 'साइन इन करा',
        'login_patient_title': 'रुग्ण लॉगिन', 'login_button': 'साइन इन करा',
        'login_button_otp': 'ओटीपी पाठवा', 'login_forgot_password': 'पासवर्ड विसरला?', 'login_new_patient': 'नवीन रुग्ण?', 'login_signup_here': 'येथे साइन अप करा', 'login_provider_title': 'प्रदाता लॉगिन', 'login_provider_id': 'क्लिनिक आयडी / ईमेल', 'login_button_provider': 'लॉग इन करा', 'login_new_provider': 'नवीन प्रदाता?', 'login_register_clinic': 'क्लिनिक नोंदणी करा', 'login_choice_title': 'म्हणून साइन इन करा...',
        'dashboard_find_clinics': 'डॅशबोर्ड (क्लिनिक शोधा)', 'dashboard_my_appointments': 'माझ्या अपॉइंटमेंट्स', 'dashboard_logout': 'लॉगआउट', 'find_clinics_heading': 'क्लिनिक शोधा: रिअल-टाइम ट्रॅफिक', 'next_appt_heading': 'तुमची पुढील अपॉइंटमेंट', 'confirmed': 'पुष्टी केली',
        'search_filter_heading': 'शोधा आणि फिल्टर करा', 'specialty_all': 'सर्व विशेष शाखा', 'dashboard_my_appointments_heading': 'माझ्या अपॉइंटमेंट्सचा इतिहास', 'upcoming': 'आगामी', 'completed': 'पूर्ण झाले', 'appt_cancel': 'रद्द करा', 'appt_view_details': 'तपशील पहा', 'appt_view_summary': 'सारांश पहा', 'new_appt_cta': 'नवीन अपॉइंटमेंट हवी आहे?', 'find_clinic_now': 'आता क्लिनिक शोधा',
        'dashboard_queue': 'डॅशबोर्ड (रांग)', 'dashboard_analytics': 'विश्लेषण', 'provider_dashboard_heading': 'प्रदाता डॅशबोर्ड: क्लिनिक प्रवाह व्यवस्थापन', 'queue_status_heading': 'रिअल-टाइम क्लिनिक स्थिती: आपत्कालीन काळजी विभाग', 'queue_traffic_level': 'वर्तमान ट्रॅफिक स्तर', 'queue_wait_time': 'प्रतीक्षा वेळ (अंदाजित)', 'queue_patients_waiting': 'प्रतीक्षेत असलेले रुग्ण', 'queue_active_heading': 'सक्रिय रुग्ण रांग', 'queue_checkin_time': 'चेक-इन:', 'queue_waiting': 'प्रतीक्षा करत आहे', 'queue_move_room': 'हलवा', 'queue_in_room': 'रूममध्ये', 'queue_mark_complete': 'पूर्ण',
        'analytics_heading': 'प्रवाह विश्लेषण आणि कामगिरी', 'analytics_chart_heading': 'सरासरी दैनिक प्रतीक्षा वेळ (मागील 30 दिवस)', 'analytics_avg_wait_time': 'सरासरी प्रतीक्षा वेळ', 'analytics_appts_booked': 'बुक केलेल्या अपॉइंटमेंट्स', 'analytics_peak_hour': 'पीक तास (सरासरी)', 'analytics_flow_score': 'प्रवाह स्कोर सुधारणा',
        'modal_lang_select_heading': 'भाषा निवडा', 'modal_lang_select_text': 'या वेबसाइटसाठी तुमची पसंतीची भाषा निवडा.', 'modal_continue_en': 'इंग्रजीमध्ये सुरू ठेवा', 'modal_booking_title': 'अपॉइंटमेंट बुक करा', 'booking_select_slot': 'एक उपलब्ध स्लॉट निवडा:', 'modal_confirm_appt': 'अपॉइंटमेंटची पुष्टी करा', 'booking_optional_note': 'क्लिनिकसाठी पर्यायी टीप (उदा. भेटीचे कारण)',
        'language_set': 'भाषा मराठी वर सेट आहे।', 'default_lang_code': 'mr', 'book_appointment': 'अपॉइंटमेंट बुक करा', 'add_patient_btn': 'रुग्णाला रांगेत जोडा', 'add_patient_name': 'रुग्णाचे नाव', 'add_patient_phone': 'संपर्क क्रमांक', 'add_patient_reason': 'भेटीचे कारण'
    }
};

interface LanguageContextType {
    language: LanguageCode;
    setLanguage: (lang: LanguageCode) => void;
    t: (key: string, unsafeHTML?: boolean) => string | React.JSX.Element;
}

const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    setLanguage: () => { },
    t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<LanguageCode>('en');

    useEffect(() => {
        const savedLang = localStorage.getItem('flowcare_lang') as LanguageCode;
        if (savedLang && ['en', 'hi', 'mr'].includes(savedLang)) {
            setLanguageState(savedLang);
        }
    }, []);

    const setLanguage = (lang: LanguageCode) => {
        setLanguageState(lang);
        localStorage.setItem('flowcare_lang', lang);
    };

    const t = (key: string, unsafeHTML: boolean = false) => {
        const text = MOCK_TRANSLATIONS[language][key] || MOCK_TRANSLATIONS['en'][key] || key;

        if (unsafeHTML) {
            return <span dangerouslySetInnerHTML={{ __html: text }} />;
        }
        return text;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}
