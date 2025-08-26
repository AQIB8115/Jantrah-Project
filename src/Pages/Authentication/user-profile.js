
// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Row,
//   Col,
//   Card,
//   Alert,
//   CardBody,
//   Button,
//   Label,
//   Input,
//   FormFeedback,
//   Form,
// } from "reactstrap";

// // Formik Validation
// import * as Yup from "yup";
// import { useFormik } from "formik";

// //redux
// import { useSelector, useDispatch } from "react-redux";

// import withRouter from "../../components/Common/withRouter";

// //Import Breadcrumb
// import Breadcrumb from "../../components/Common/Breadcrumb";

// import avatar from "../../assets/images/users/avatar-1.jpg";
// // actions
// import { editProfile, resetProfileFlag } from "../../store/actions";

// import { createSelector } from 'reselect';

// const UserProfile = () => {
//   document.title = "Profile | Upzet - React Admin & Dashboard Template";

//   const dispatch = useDispatch();

//   const [email, setemail] = useState("");
//   const [name, setname] = useState("");
//   const [idx, setidx] = useState(1);

//   const userprofilepage = createSelector(
//     (state ) => state.profile,
//     (state) => ({
//         error: state.error,
//         success: state.success,
//     })
//   );
// // Inside your component
// const { error, success } = useSelector(userprofilepage);

//   useEffect(() => {
//     if (localStorage.getItem("authUser")) {
//       const obj = JSON.parse(localStorage.getItem("authUser"));
//       if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
//         setname(obj.displayName);
//         setemail(obj.email);
//         setidx(obj.uid);
//       } else if (
//         process.env.REACT_APP_DEFAULTAUTH === "fake" ||
//         process.env.REACT_APP_DEFAULTAUTH === "jwt"
//       ) {
//         setname(obj.username);
//         setemail(obj.email);
//         setidx(obj.uid);
//       }
//       setTimeout(() => {
//         dispatch(resetProfileFlag());
//       }, 3000);
//     }
//   }, [dispatch, success]);

//   const validation = useFormik({
//     // enableReinitialize : use this flag when initial values needs to be changed
//     enableReinitialize: true,

//     initialValues: {
//       username: name || "",
//       idx: idx || "",
//     },
//     validationSchema: Yup.object({
//       username: Yup.string().required("Please Enter Your UserName"),
//     }),
//     onSubmit: (values) => {
//       dispatch(editProfile(values));
//     },
//   });

//   return (
//     <React.Fragment>
//         <div className="page-content">
//           <Container fluid>
//             <Breadcrumb title="Upzet" breadcrumbItem="Profile" />

//             <Row>
//               <Col lg="12">
//                 {error && error ? (
//                   <Alert color="danger">
//                     <div>{error}</div>
//                   </Alert>
//                 ) : null}
//                 {success ? (
//                   <Alert color="success">
//                     <div>{success}</div>
//                   </Alert>
//                 ) : null}

//                 <Card>
//                   <CardBody>
//                     <div className="d-flex">
//                       <div className="ms-3">
//                         <img
//                           src={avatar}
//                           alt=""
//                           className="avatar-md rounded-circle img-thumbnail"
//                         />
//                       </div>
//                       <div className="flex-grow-1 align-self-center">
//                         <div className="text-muted">
//                           <h5>{name}</h5>
//                           <p className="mb-1">{email}</p>
//                           <p className="mb-0">Id no: #{idx}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </CardBody>
//                 </Card>
//               </Col>
//             </Row>

//             <h4 className="card-title mb-4">Change User Name</h4>

//             <Card>
//               <CardBody>
//                 <Form
//                   className="form-horizontal"
//                   onSubmit={(e) => {
//                     e.preventDefault();
//                     validation.handleSubmit();
//                     return false;
//                   }}
//                 >
//                   <div className="form-group">
//                     <Label className="form-label">User Name</Label>
//                     <Input
//                       name="username"
//                       // value={name}
//                       className="form-control"
//                       placeholder="Enter User Name"
//                       type="text"
//                       onChange={validation.handleChange}
//                       onBlur={validation.handleBlur}
//                       value={validation.values.username || ""}
//                       invalid={
//                         validation.touched.username &&
//                         validation.errors.username
//                           ? true
//                           : false
//                       }
//                     />
//                     {validation.touched.username &&
//                     validation.errors.username ? (
//                       <FormFeedback type="invalid">
//                         <div>{validation.errors.username}</div>
//                       </FormFeedback>
//                     ) : null}
//                     <Input name="idx" value={idx} type="hidden" />
//                   </div>
//                   <div className="text-center mt-4">
//                     <Button type="submit" color="danger">
//                       Update User Name
//                     </Button>
//                   </div>
//                 </Form>
//               </CardBody>
//             </Card>
//           </Container>
//         </div>
//     </React.Fragment>
//   );
// };

// export default withRouter(UserProfile);


import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Alert,
  CardBody,
  Button,
  Label,
  Input,
  FormFeedback,
  Form,
} from "reactstrap";

import * as Yup from "yup";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import withRouter from "../../components/Common/withRouter";
// import Breadcrumb from "../../components/Common/Breadcrumb";
import { editProfile, resetProfileFlag } from "../../store/actions";
import { createSelector } from "reselect";

import defaultAvatar from "../../assets/images/users/avatar-1.jpg";

const UserProfile = () => {
  document.title = "Profile | Upzet - React Admin & Dashboard Template";

  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(defaultAvatar);

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    // idx: 1,
  });

  const userprofilepage = createSelector(
    (state) => state.profile,
    (state) => ({
      error: state.error,
      success: state.success,
    })
  );

  const { error, success } = useSelector(userprofilepage);

  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      const obj = JSON.parse(localStorage.getItem("authUser"));
      const updatedProfile = {
        name: obj.username || obj.displayName || "",
        email: obj.email || "",
        phone: obj.phone || "",
        address: obj.address || "",
        // idx: obj.uid || 1,
      };
      setProfile(updatedProfile);
      setPreviewImage(obj.profileImage || defaultAvatar);
    }

    setTimeout(() => dispatch(resetProfileFlag()), 3000);
  }, [dispatch, success]);

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: profile.name,
      email: profile.email,
      phone: profile.phone,
      address: profile.address,
      // idx: profile.idx,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please enter your name"),
      email: Yup.string().email("Invalid email").required("Please enter email"),
      phone: Yup.string().required("Enter phone number"),
      address: Yup.string().required("Enter address"),
    }),
    onSubmit: (values) => {
      const formData = new FormData();
      for (const key in values) {
        formData.append(key, values[key]);
      }
      if (profileImage) {
        formData.append("profileImage", profileImage);
      }

      dispatch(editProfile(formData));
      setProfile(values);
      setEditMode(false);
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* <Breadcrumb title="Upzet" breadcrumbItem="Profile" /> */}

          <Row>
            <Col lg="12">
              {error && <Alert color="danger">{error}</Alert>}
              {success && <Alert color="success">{success}</Alert>}

              <Card>
                <CardBody>
                  <div className="d-flex align-items-center">
                    <img
                      src={previewImage}
                      alt=""
                      className="avatar-md rounded-circle img-thumbnail me-3"
                    />
                    <div className="flex-grow-1">
                      <h5>{profile.name}</h5>
                      <p className="mb-1">{profile.email}</p>
                      <p className="mb-1">Phone: {profile.phone || "N/A"}</p>
                      <p className="mb-1">Address: {profile.address || "N/A"}</p>
                      {/* <p className="mb-0">ID: #{profile.idx}</p> */}
                    </div>
                    <div className="ms-auto">
                      <Button color="primary" onClick={() => setEditMode(true)}>
                        Edit
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {editMode && (
            <>
              <h4 className="card-title mb-4">Edit Profile</h4>
              <Card>
                <CardBody>
                  <Form onSubmit={validation.handleSubmit}>
                    <Row className="gy-3">
                      <Col md={6}>
                        <Label>Name</Label>
                        <Input
                          name="name"
                          type="text"
                          value={validation.values.name}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={validation.touched.name && !!validation.errors.name}
                        />
                        <FormFeedback>{validation.errors.name}</FormFeedback>
                      </Col>

                      <Col md={6}>
                        <Label>Email</Label>
                        <Input
                          name="email"
                          type="email"
                          value={validation.values.email}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={validation.touched.email && !!validation.errors.email}
                        />
                        <FormFeedback>{validation.errors.email}</FormFeedback>
                      </Col>

                      <Col md={6}>
                        <Label>Phone</Label>
                        <Input
                          name="phone"
                          type="text"
                          value={validation.values.phone}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={validation.touched.phone && !!validation.errors.phone}
                        />
                        <FormFeedback>{validation.errors.phone}</FormFeedback>
                      </Col>

                      <Col md={6}>
                        <Label>Address</Label>
                        <Input
                          name="address"
                          type="text"
                          value={validation.values.address}
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={validation.touched.address && !!validation.errors.address}
                        />
                        <FormFeedback>{validation.errors.address}</FormFeedback>
                      </Col>

                      <Col md={6}>
                        <Label>Profile Picture</Label>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                      </Col>
                    </Row>

                    <div className="text-center mt-4">
                      <Button type="submit" color="success" className="me-2">
                        Save
                      </Button>
                      <Button
                        type="button"
                        color="secondary"
                        onClick={() => setEditMode(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </>
          )}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(UserProfile);
