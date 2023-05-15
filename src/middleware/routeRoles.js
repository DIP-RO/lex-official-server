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
};
export default routeRoles;
