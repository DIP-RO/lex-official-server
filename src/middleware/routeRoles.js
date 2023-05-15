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
  /* source */
  "/api/v1/inventory/source": ["SUPER_ADMIN", "ADMIN", "RECEPTIONIST"],
  "/api/v1/inventory/source/:id": ["SUPER_ADMIN", "ADMIN", "RECEPTIONIST"],
  "/api/v1/inventory/source/filter": ["SUPER_ADMIN", "ADMIN", "RECEPTIONIST"],
  /* end */
};
export default routeRoles;
