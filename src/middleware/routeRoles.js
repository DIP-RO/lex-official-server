const routeRoles = {
  /* Front Office */
  /* admission-enquiry */
  "/api/v1/front-office/admission-enquiry": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
  ],
  "/api/v1/front-office/admission-enquiry/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
  ],
  "/api/v1/front-office/admission-enquiry/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
  ],
  /* end */
  /* visitor-book */
  "/api/v1/front-office/visitor-book": ["SUPER_ADMIN", "ADMIN", "RECEPTIONIST"],
  "/api/v1/front-office/visitor-book/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
  ],
  "/api/v1/front-office/visitor-book/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
  ],
  /* end */
  /* phone-call-log */
  "/api/v1/front-office/phone-call-log": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
  ],
  "/api/v1/front-office/phone-call-log/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
  ],
  "/api/v1/front-office/phone-call-log/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
  ],
  /* end */
  /* postal-dispatch */
  "/api/v1/front-office/postal-dispatch": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
  ],
  "/api/v1/front-office/postal-dispatch/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
  ],
  "/api/v1/front-office/postal-dispatch/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
  ],
  /* end */
  /* postal-receive */
  "/api/v1/front-office/postal-receive": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
  ],
  "/api/v1/front-office/postal-receive/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
  ],
  "/api/v1/front-office/postal-receive/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
  ],
  /* end */
  /* complain */
  "/api/v1/front-office/complain": ["SUPER_ADMIN", "ADMIN", "RECEPTIONIST"],
  "/api/v1/front-office/complain/:id": ["SUPER_ADMIN", "ADMIN", "RECEPTIONIST"],
  "/api/v1/front-office/complain/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
  ],
  /* end */
  /* source */
  "/api/v1/front-office/source": ["SUPER_ADMIN", "ADMIN", "RECEPTIONIST"],
  "/api/v1/front-office/source/:id": ["SUPER_ADMIN", "ADMIN", "RECEPTIONIST"],
  "/api/v1/front-office/source/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
  ],
  /* end */
  /* End Front Office */

  /* Student Information  */
  /* disable-reason */
  "/api/v1/student-details/disable-reason": ["SUPER_ADMIN", "ADMIN", "TEACHER"],
  "/api/v1/student-details/disable-reason/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
  ],
  "/api/v1/student-details/disable-reason/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
  ],
  /* end */
  /* student-house */
  "/api/v1/student-details/student-house": ["SUPER_ADMIN", "ADMIN", "TEACHER"],
  "/api/v1/student-details/student-house/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
  ],
  "/api/v1/student-details/student-house/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
  ],
  /* end */
  /* student-categories */
  "/api/v1/student-details/student-categories": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
  ],
  "/api/v1/student-details/student-categories/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
  ],
  "/api/v1/student-details/student-categories/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
  ],
  /* end */
  /* student-categories */
  "/api/v1/student-details/student-categories": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
  ],
  "/api/v1/student-details/student-categories/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
  ],
  "/api/v1/student-details/student-categories/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
  ],
  /* end */

  /* End  Student Information*/

  /* fees-collection */
  /* fees-master */
  "/api/v1/fees-collection/fees-master": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/fees-collection/fees-master/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  "/api/v1/fees-collection/fees-master/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  /* end */
  /* fees-group */
  "/api/v1/fees-collection/fees-group": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/fees-collection/fees-group/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  "/api/v1/fees-collection/fees-group/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  /* end */
  /* fees-type */
  "/api/v1/fees-collection/fees-type": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/fees-collection/fees-type/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  "/api/v1/fees-collection/fees-type/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  /* end */
  /* fees-discount */
  "/api/v1/fees-collection/fees-discount": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  "/api/v1/fees-collection/fees-discount/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  "/api/v1/fees-collection/fees-discount/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  /* end */
  /* End fees-collection  */

  /* onlineCourse */
  /* course-category */
  "/api/v1/onlineCourse/course-category": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "TEACHER",
    "ACCOUNTANT",
    "RECEPTIONIST",
    "LIBRARIAN",
  ],
  "/api/v1/onlineCourse/course-category/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "TEACHER",
    "ACCOUNTANT",
    "RECEPTIONIST",
    "LIBRARIAN",
  ],
  "/api/v1/onlineCourse/course-category/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "TEACHER",
    "ACCOUNTANT",
    "RECEPTIONIST",
    "LIBRARIAN",
  ],
  /* end */
  /* offline-payment */
  "/api/v1/onlineCourse/offline-payment": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  "/api/v1/onlineCourse/offline-payment/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  "/api/v1/onlineCourse/offline-payment/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  /* end */
  /* online-course */
  "/api/v1/onlineCourse/online-course": ["SUPER_ADMIN", "ADMIN", "TEACHER"],
  "/api/v1/onlineCourse/online-course/:id": ["SUPER_ADMIN", "ADMIN", "TEACHER"],
  "/api/v1/onlineCourse/online-course/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
  ],
  /* end */
  /* online-course-setting */
  "/api/v1/onlineCourse/online-course-setting": ["SUPER_ADMIN", "ADMIN"],
  "/api/v1/onlineCourse/online-course-setting/:id": ["SUPER_ADMIN", "ADMIN"],
  "/api/v1/onlineCourse/online-course-setting/filter": ["SUPER_ADMIN", "ADMIN"],
  /* end */
  /* Gmeet Live Classes */
  /* g-meet */
  "/api/v1/g-meet/g-meet": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
    "RECEPTIONIST",
    "LIBRARIAN",
  ],
  "/api/v1/g-meet/g-meet/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
    "RECEPTIONIST",
    "LIBRARIAN",
  ],
  "/api/v1/g-meet/g-meet/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
    "RECEPTIONIST",
    "LIBRARIAN",
  ],
  /* end */
  /* End g meet */
  /* Zoom Live Classes */
  /* z-meet */
  "/api/v1/z-meet/z-meet": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
    "RECEPTIONIST",
    "LIBRARIAN",
  ],
  "/api/v1/z-meet/z-meet/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
    "RECEPTIONIST",
    "LIBRARIAN",
  ],
  "/api/v1/z-meet/z-meet/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
    "RECEPTIONIST",
    "LIBRARIAN",
  ],
  /* end */
  /* End Zoom Live Classes */
  /* Behaviour Records */
  /* behaviour */
  "/api/v1/behaviour/incidents": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "LIBRARIAN",
  ],
  "/api/v1/behaviour/incidents/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "LIBRARIAN",
  ],
  "/api/v1/behaviour/incidents/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "LIBRARIAN",
  ],
  /* end */
  /*End Behaviour Records */
  /* Income */
  /* income */
  "/api/v1/income/income": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/income/income/:id": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/income/income/filter": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  /* end */
  /* income-head */
  "/api/v1/income/income-head": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/income/income-head/:id": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/income/income-head/filter": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  /* end */
  /* End Income */

  /* Expenses */
  /* expenses */
  "/api/v1/expenses/expenses": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/expenses/expenses/:id": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/expenses/expenses/filter": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  /* end */
  /* expenses-head */
  "/api/v1/expenses/expenses-head": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/expenses/expenses-head/:id": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/expenses/expenses-head/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  /* end */
  /* End Expenses */

  /* Examinations */
  /* admit-cart-design */
  "/api/v1/examinations/admit-cart-design": ["SUPER_ADMIN", "ADMIN", "TEACHER"],
  "/api/v1/examinations/admit-cart-design/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
  ],
  "/api/v1/examinations/admit-cart-design/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
  ],
  /* end */
  /* design-mark-sheet */
  "/api/v1/examinations/design-mark-sheet": ["SUPER_ADMIN", "ADMIN", "TEACHER"],
  "/api/v1/examinations/design-mark-sheet/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
  ],
  "/api/v1/examinations/design-mark-sheet/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
  ],
  /* end */
  /* exam-group */
  "/api/v1/examinations/exam-group": ["SUPER_ADMIN", "ADMIN", "TEACHER"],
  "/api/v1/examinations/exam-group/:id": ["SUPER_ADMIN", "ADMIN", "TEACHER"],
  "/api/v1/examinations/exam-group/filter": ["SUPER_ADMIN", "ADMIN", "TEACHER"],
  /* end */
  /* mark-grade */
  "/api/v1/examinations/mark-grade": ["SUPER_ADMIN", "ADMIN", "TEACHER"],
  "/api/v1/examinations/mark-grade/:id": ["SUPER_ADMIN", "ADMIN", "TEACHER"],
  "/api/v1/examinations/mark-grade/filter": ["SUPER_ADMIN", "ADMIN", "TEACHER"],
  /* end */
  /* mark-division */
  "/api/v1/examinations/mark-division": ["SUPER_ADMIN"],
  "/api/v1/examinations/mark-division/:id": ["SUPER_ADMIN"],
  "/api/v1/examinations/mark-division/filter": ["SUPER_ADMIN"],
  /* end */
  /* print-admit-card */
  "/api/v1/examinations/print-admit-card": ["SUPER_ADMIN", "ADMIN", "TEACHER"],
  "/api/v1/examinations/print-admit-card/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
  ],
  "/api/v1/examinations/print-admit-card/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
  ],
  /* end */
  /* End Examinations */
  /* Attendance */
  /* student-attendance */
  "/api/v1/attendance/student-attendance": ["SUPER_ADMIN", "ADMIN", "TEACHER"],
  "/api/v1/attendance/student-attendance/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
  ],
  "/api/v1/attendance/student-attendance/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
  ],
  /* end */
  /* leave */
  "/api/v1/attendance/leave": ["SUPER_ADMIN", "ADMIN", "TEACHER"],
  "/api/v1/attendance/leave/:id": ["SUPER_ADMIN", "ADMIN", "TEACHER"],
  "/api/v1/attendance/leave/filter": ["SUPER_ADMIN", "ADMIN", "TEACHER"],
  /* end */
  /* End Attendance */

  /* Online Examinations */
  /* online-exam */
  "/api/v1/online-examination/online-exam": ["SUPER_ADMIN", "ADMIN", "TEACHER"],
  "/api/v1/online-examination/online-exam/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
  ],
  "/api/v1/online-examination/online-exam/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
  ],
  /* end */
  /* question-bank */
  "/api/v1/online-examination/question-bank": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
  ],
  "/api/v1/online-examination/question-bank/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
  ],
  "/api/v1/online-examination/question-bank/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
  ],
  /* end */
  /* End Online Examinations */

  /* Academics */
  /* class */
  "/api/v1/academic/class": ["SUPER_ADMIN", "ADMIN", "TEACHER", "RECEPTIONIST"],
  "/api/v1/academic/class/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
    "RECEPTIONIST",
  ],
  "/api/v1/academic/class/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
    "RECEPTIONIST",
  ],
  /* end */
  /* class-teacher */
  "/api/v1/academic/class-teacher": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
    "TEACHER",
  ],
  "/api/v1/academic/class-teacher/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
    "TEACHER",
  ],
  "/api/v1/academic/class-teacher/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
    "TEACHER",
  ],
  /* end */
  /* class-time-table */
  "/api/v1/academic/class-time-table": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
    "TEACHER",
  ],
  "/api/v1/academic/class-time-table/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
    "TEACHER",
  ],
  "/api/v1/academic/class-time-table/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
    "TEACHER",
  ],
  /* end */
  /* class-promote-student */
  "/api/v1/academic/class-promote-student": ["SUPER_ADMIN", "ADMIN"],
  "/api/v1/academic/class-promote-student/:id": ["SUPER_ADMIN", "ADMIN"],
  "/api/v1/academic/class-promote-student/filter": ["SUPER_ADMIN", "ADMIN"],
  /* end */
  /* section */
  "/api/v1/academic/section": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
    "TEACHER",
  ],
  "/api/v1/academic/section/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
    "TEACHER",
  ],
  "/api/v1/academic/section/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
    "TEACHER",
  ],
  /* end */
  /* subject-group */
  "/api/v1/academic/subject-group": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
    "TEACHER",
  ],
  "/api/v1/academic/subject-group/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
    "TEACHER",
  ],
  "/api/v1/academic/subject-group/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
    "TEACHER",
  ],
  /* end */
  /* subject */
  "/api/v1/academic/subject": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
    "TEACHER",
  ],
  "/api/v1/academic/subject/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
    "TEACHER",
  ],
  "/api/v1/academic/subject/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "RECEPTIONIST",
    "TEACHER",
  ],
  /* end */
  /* End academic */
  /* lesson plan */
  /* lesson */
  "/api/v1/lesson/lesson": ["SUPER_ADMIN", "ADMIN", "TEACHER"],
  "/api/v1/lesson/lesson/:id": ["SUPER_ADMIN", "ADMIN", "TEACHER"],
  "/api/v1/lesson/lesson/filter": ["SUPER_ADMIN", "ADMIN", "TEACHER"],
  /* end */
  /* topic */
  "/api/v1/lesson/topic": ["SUPER_ADMIN", "ADMIN", "TEACHER"],
  "/api/v1/lesson/topic/:id": ["SUPER_ADMIN", "ADMIN", "TEACHER"],
  "/api/v1/lesson/topic/filter": ["SUPER_ADMIN", "ADMIN", "TEACHER"],
  /* end */
  /* End Lesson Plan */

  /* Human Resource */
  /* designation */
  "/api/v1/human-resource/designation": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/human-resource/designation/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  "/api/v1/human-resource/designation/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  /* end */
  /* department */
  "/api/v1/human-resource/department": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/human-resource/department/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  "/api/v1/human-resource/department/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  /* end */
  /* leave-type */
  "/api/v1/human-resource/leave-type": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "TEACHER",
  ],
  "/api/v1/human-resource/leave-type/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "TEACHER",
  ],
  "/api/v1/human-resource/leave-type/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "TEACHER",
  ],
  /* end */
  /* staff-attendance */
  "/api/v1/human-resource/staff-attendance": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  "/api/v1/human-resource/staff-attendance/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  "/api/v1/human-resource/staff-attendance/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  /* end */
  /* staff */
  "/api/v1/human-resource/staff": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "TEACHER",
    "LIBRARIAN",
    "RECEPTIONIST",
  ],
  "/api/v1/human-resource/staff/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "TEACHER",
    "LIBRARIAN",
    "RECEPTIONIST",
  ],
  "/api/v1/human-resource/staff/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "TEACHER",
    "LIBRARIAN",
    "RECEPTIONIST",
  ],
  /* end */
  /* approve-leave-request */
  "/api/v1/human-resource/approve-leave-request": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  "/api/v1/human-resource/approve-leave-request/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  "/api/v1/human-resource/approve-leave-request/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  /* end */
  /* apply-leave */
  "/api/v1/human-resource/apply-leave": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "TEACHER",
  ],
  "/api/v1/human-resource/apply-leave/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "TEACHER",
  ],
  "/api/v1/human-resource/apply-leave/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "TEACHER",
  ],
  /* end */
  /* End  Human Resource*/

  /* Communicate */
  /* email-template */
  "/api/v1/communicate/email-template": ["SUPER_ADMIN"],
  "/api/v1/communicate/email-template/:id": ["SUPER_ADMIN"],
  "/api/v1/communicate/email-template/filter": ["SUPER_ADMIN"],
  /* end */
  /* notice-board */
  "/api/v1/communicate/notice-board": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "TEACHER",
    "LIBRARIAN",
    "RECEPTIONIST",
  ],
  "/api/v1/communicate/notice-board/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "TEACHER",
    "LIBRARIAN",
    "RECEPTIONIST",
  ],
  "/api/v1/communicate/notice-board/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "TEACHER",
    "LIBRARIAN",
    "RECEPTIONIST",
  ],
  /* end */
  /* send-mail */
  "/api/v1/communicate/send-mail": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "TEACHER",
    "LIBRARIAN",
    "RECEPTIONIST",
  ],
  "/api/v1/communicate/send-mail/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "TEACHER",
    "LIBRARIAN",
    "RECEPTIONIST",
  ],
  "/api/v1/communicate/send-mail/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "TEACHER",
    "LIBRARIAN",
    "RECEPTIONIST",
  ],
  /* end */
  /* send-sms */
  "/api/v1/communicate/send-sms": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "TEACHER",
    "LIBRARIAN",
    "RECEPTIONIST",
  ],
  "/api/v1/communicate/send-sms/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "TEACHER",
    "LIBRARIAN",
    "RECEPTIONIST",
  ],
  "/api/v1/communicate/send-sms/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "TEACHER",
    "RECEPTIONIST",
    "LIBRARIAN",
  ],
  /* end */
  /* send-template */
  "/api/v1/communicate/send-template": ["SUPER_ADMIN"],
  "/api/v1/communicate/send-template/:id": ["SUPER_ADMIN"],
  "/api/v1/communicate/send-template/filter": ["SUPER_ADMIN"],
  /* end */
  /* End Communicate */

  /* Download Center */
  /* content-type */
  "/api/v1/download-center/content-type": ["SUPER_ADMIN"],
  "/api/v1/download-center/content-type/:id": ["SUPER_ADMIN"],
  "/api/v1/download-center/content-type/filter": ["SUPER_ADMIN"],
  /* end */
  /* upload-content */
  "/api/v1/download-center/upload-content": ["SUPER_ADMIN", "TEACHER", "ADMIN"],
  "/api/v1/download-center/upload-content/:id": [
    "SUPER_ADMIN",
    "TEACHER",
    "ADMIN",
  ],
  "/api/v1/download-center/upload-content/filter": [
    "SUPER_ADMIN",
    "TEACHER",
    "ADMIN",
  ],
  /* end */
  /* video-tutorial */
  "/api/v1/download-center/video-tutorial": ["SUPER_ADMIN", "TEACHER"],
  "/api/v1/download-center/video-tutorial/:id": ["SUPER_ADMIN", "TEACHER"],
  "/api/v1/download-center/video-tutorial/filter": ["SUPER_ADMIN", "TEACHER"],
  /* end */
  /* End Download Center */

  /* Homework */
  /* home-work */
  "/api/v1/home-work/home-work": ["SUPER_ADMIN", "TEACHER", "ADMIN"],
  "/api/v1/home-work/home-work/:id": ["SUPER_ADMIN", "TEACHER", "ADMIN"],
  "/api/v1/home-work/home-work/filter": ["SUPER_ADMIN", "TEACHER", "ADMIN"],
  /* end */
  /* End Home Work */

  /* Library */
  /* book-list */
  "/api/v1/library/book-list": ["SUPER_ADMIN", "TEACHER", "LIBRARIAN"],
  "/api/v1/library/book-list/:id": ["SUPER_LIBRARIAN", "TEACHER", "LIBRARIAN"],
  "/api/v1/library/book-list/filter": ["SUPER_ADMIN", "TEACHER", "LIBRARIAN"],
  /* end */
  /* issue-return */
  "/api/v1/library/issue-return": ["SUPER_ADMIN", "TEACHER", "LIBRARIAN"],
  "/api/v1/library/issue-return/:id": [
    "SUPER_LIBRARIAN",
    "TEACHER",
    "LIBRARIAN",
  ],
  "/api/v1/library/issue-return/filter": [
    "SUPER_ADMIN",
    "TEACHER",
    "LIBRARIAN",
  ],
  /* end */
  /* End Library */

  /* Inventory */
  /* issue-items */
  "/api/v1/inventory/issue-items": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/inventory/issue-items/:id": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/inventory/issue-items/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  /* end */
  /* add-item-stock */
  "/api/v1/inventory/add-item-stock": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/inventory/add-item-stock/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  "/api/v1/inventory/add-item-stock/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  /* end */
  /* add-item */
  "/api/v1/inventory/add-item": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/inventory/add-item/:id": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/inventory/add-item/filter": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  /* end */
  /* item-category */
  "/api/v1/inventory/item-category": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/inventory/item-category/:id": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/inventory/item-category/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  /* end */
  /* item-store */
  "/api/v1/inventory/item-store": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/inventory/item-store/:id": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/inventory/item-store/filter": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  /* end */
  /* item-supplier */
  "/api/v1/inventory/item-supplier": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/inventory/item-supplier/:id": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/inventory/item-supplier/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  /* end */
  /* End Inventory */

  /* Transport */
  /* assign-vehicle */
  "/api/v1/transport/assign-vehicle": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/transport/assign-vehicle/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  "/api/v1/transport/assign-vehicle/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
  ],
  /* end */
  /* fees-master */
  "/api/v1/transport/fees-master": ["SUPER_ADMIN"],
  "/api/v1/transport/fees-master/:id": ["SUPER_ADMIN"],
  "/api/v1/transport/fees-master/filter": ["SUPER_ADMIN"],
  /* end */
  /* pickup-point */
  "/api/v1/transport/pickup-point": ["SUPER_ADMIN"],
  "/api/v1/transport/pickup-point/:id": ["SUPER_ADMIN"],
  "/api/v1/transport/pickup-point/filter": ["SUPER_ADMIN"],
  /* end */
  /* route-pickup-point */
  "/api/v1/transport/route-pickup-point": ["SUPER_ADMIN"],
  "/api/v1/transport/route-pickup-point/:id": ["SUPER_ADMIN"],
  "/api/v1/transport/route-pickup-point/filter": ["SUPER_ADMIN"],
  /* end */
  /* routes */
  "/api/v1/transport/routes": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/transport/routes/:id": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/transport/routes/filter": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  /* end */
  /* vehicle */
  "/api/v1/transport/vehicle": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/transport/vehicle/:id": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/transport/vehicle/filter": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  /* end */
  /* End Transport */

  /* Hostel */
  /* hostel-rooms */
  "/api/v1/hostel/hostel-rooms": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/hostel/hostel-rooms/:id": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/hostel/hostel-rooms/filter": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  /* end */
  /* room-type */
  "/api/v1/hostel/room-type": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/hostel/room-type/:id": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/hostel/room-type/filter": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  /* end */
  /* hostel */
  "/api/v1/hostel/hostel": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/hostel/hostel/:id": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  "/api/v1/hostel/hostel/filter": ["SUPER_ADMIN", "ADMIN", "ACCOUNTANT"],
  /* end */
  /* End Hostel */

  /* Certificate */
  /* generate-certificates */
  "/api/v1/certificate/generate-certificates": ["SUPER_ADMIN", "ADMIN"],
  "/api/v1/certificate/generate-certificates/:id": ["SUPER_ADMIN", "ADMIN"],
  "/api/v1/certificate/generate-certificates/filter": ["SUPER_ADMIN", "ADMIN"],
  /* end */
  /* generate-staff-id-card */
  "/api/v1/certificate/generate-staff-id-card": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "TEACHER",
    "RECEPTIONIST",
  ],
  "/api/v1/certificate/generate-staff-id-card/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "TEACHER",
    "RECEPTIONIST",
  ],
  "/api/v1/certificate/generate-staff-id-card/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "TEACHER",
    "RECEPTIONIST",
  ],
  /* end */
  /* generate-student-id-card */
  "/api/v1/certificate/generate-student-id-card": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
  ],
  "/api/v1/certificate/generate-student-id-card/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
  ],
  "/api/v1/certificate/generate-student-id-card/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "TEACHER",
  ],
  /* end */
  /* staff-id-card */
  "/api/v1/certificate/staff-id-card": ["SUPER_ADMIN", "ADMIN"],
  "/api/v1/certificate/staff-id-card/:id": ["SUPER_ADMIN", "ADMIN"],
  "/api/v1/certificate/staff-id-card/filter": ["SUPER_ADMIN", "ADMIN"],
  /* end */
  /* student-certificates */
  "/api/v1/certificate/student-certificates": ["SUPER_ADMIN", "ADMIN"],
  "/api/v1/certificate/student-certificates/:id": ["SUPER_ADMIN", "ADMIN"],
  "/api/v1/certificate/student-certificates/filter": ["SUPER_ADMIN", "ADMIN"],
  /* end */
  /* student-id-card */
  "/api/v1/certificate/student-id-card": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "TEACHER",
    "RECEPTIONIST",
  ],
  "/api/v1/certificate/student-id-card/:id": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "TEACHER",
    "RECEPTIONIST",
  ],
  "/api/v1/certificate/student-id-card/filter": [
    "SUPER_ADMIN",
    "ADMIN",
    "ACCOUNTANT",
    "TEACHER",
    "RECEPTIONIST",
  ],
  /* end */
  /* End Certificate */

  /* Front CMS */
  /* banner-image */
  "/api/v1/front-cms/banner-image": ["SUPER_ADMIN", "ADMIN"],
  "/api/v1/front-cms/banner-image/:id": ["SUPER_ADMIN", "ADMIN"],
  "/api/v1/front-cms/banner-image/filter": ["SUPER_ADMIN", "ADMIN"],
  /* end */
  /* event */
  "/api/v1/front-cms/event": ["SUPER_ADMIN", "ADMIN"],
  "/api/v1/front-cms/event/:id": ["SUPER_ADMIN", "ADMIN"],
  "/api/v1/front-cms/event/filter": ["SUPER_ADMIN", "ADMIN"],
  /* end */
  /* gallery */
  "/api/v1/front-cms/gallery": ["SUPER_ADMIN", "ADMIN"],
  "/api/v1/front-cms/gallery/:id": ["SUPER_ADMIN", "ADMIN"],
  "/api/v1/front-cms/gallery/filter": ["SUPER_ADMIN", "ADMIN"],
  /* end */
  /* media-manager */
  "/api/v1/front-cms/media-manager": ["SUPER_ADMIN", "ADMIN"],
  "/api/v1/front-cms/media-manager/:id": ["SUPER_ADMIN", "ADMIN"],
  "/api/v1/front-cms/media-manager/filter": ["SUPER_ADMIN", "ADMIN"],
  /* end */
  /* news */
  "/api/v1/front-cms/news": ["SUPER_ADMIN", "ADMIN"],
  "/api/v1/front-cms/news/:id": ["SUPER_ADMIN", "ADMIN"],
  "/api/v1/front-cms/news/filter": ["SUPER_ADMIN", "ADMIN"],
  /* end */
  /* End Front CMS */

  /* Alumni */
  /* alumni-event */
  "/api/v1/alumni/alumni-event": ["SUPER_ADMIN", "ADMIN"],
  "/api/v1/alumni/alumni-event/:id": ["SUPER_ADMIN", "ADMIN"],
  "/api/v1/alumni/alumni-event/filter": ["SUPER_ADMIN", "ADMIN"],
  /* end */
  /* End Alumni */
};
export default routeRoles;
