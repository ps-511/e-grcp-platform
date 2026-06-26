# Enterprise Governance, Risk, Compliance & Procurement Platform (e-GRCP)

## Project Overview

The Enterprise Governance, Risk, Compliance & Procurement Platform (e-GRCP) is a frontend enterprise web application developed using React 19 and Vite. The application centralizes procurement, vendor management, compliance monitoring, risk management, auditing, reporting, notifications, and user settings into a single enterprise dashboard.

The project follows modern React development practices including Redux Toolkit, React Router DOM, Axios, React Hook Form, Yup validation, Material UI, lazy loading, protected routing, Redux Persist, and enterprise architecture principles.



## Technology Stack

* React 19
* Vite
* React Router DOM
* Redux Toolkit
* Redux Persist
* Axios
* React Hook Form
* Yup Validation
* Material UI (MUI)
* Recharts
* Vitest
* React Testing Library



## Features

### Authentication

* Login
* Forgot Password
* Reset Password
* Session Expired
* Protected Routes
* Role-Based Access Control

### Dashboard

* KPI Cards
* Procurement Trend
* Risk Trend
* Compliance Trend
* Department Spending
* Recent Activities

### Procurement

* Procurement List
* Procurement Details
* Search
* Sorting
* Filtering

### Vendor Management

* Vendor Dashboard
* Vendor Profile
* Vendor Details

### Risk Management

* Risk Dashboard
* Risk Monitoring

### Compliance

* Compliance Monitoring
* Compliance Issues

### Audit

* Audit History
* User Activities
* System Logs

### Reports

* Report Dashboard
* Analytics

### Notifications

* Notification Center

### Settings

* User Profile
* Theme Preferences
* Security Settings


## Project Structure

src/
├── components/
├── features/
├── hooks/
├── layouts/
├── mocks/
├── routes/
├── services/
├── store/
│   └── slices/
├── tests/
├── App.jsx
└── main.jsx

## Redux Architecture

Application state is managed using Redux Toolkit.

Implemented slices:

* authSlice
* dashboardSlice
* procurementSlice
* vendorSlice
* riskSlice
* complianceSlice
* auditSlice
* reportSlice
* notificationSlice
* uiSlice

Redux Persist is used to store authentication and UI preferences.


## Routing

### Public Routes

* /login
* /forgot-password
* /reset-password
* /session-expired

### Protected Routes

* /dashboard
* /procurement
* /vendors
* /approval
* /risk
* /compliance
* /audit
* /reports
* /notifications
* /settings

Role-based routing is implemented using ProtectedRoute and RoleProtectedRoute.



## Mock Data

The application uses local JSON files to simulate backend APIs.

Available mock files:

* users.json
* vendors.json
* requests.json
* riskData.json
* notifications.json
* reports.json
* auditData.json
* approvalData.json



## Performance Optimization

Implemented optimizations include:

* React.memo
* useMemo
* useCallback
* Lazy Loading
* Code Splitting
* Dynamic Imports
* Route-Based Splitting


## Error Handling

Implemented:

* Global Error Boundary
* API Error Handling
* Network Error Handling
* Form Validation
* Fallback UI



## Testing

Testing completed using:

* Vitest
* React Testing Library

Tested modules include:

* Dashboard Component
* Login Component
* Header Component
* Redux Authentication Slice
* API Services


## Installation

Clone the repository

```bash
git clone https://github.com/ps-511/e-grcp-platform.git
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Run tests

```bash
npx vitest
```

Build production

```bash
npm run build
```

---

## Deployment

### Live Application

https://e-grcp-platform.vercel.app/

### GitHub Repository

Paste your GitHub Repository URL here.



## Project Deliverables

* Source Code
* GitHub Repository
* Live Deployment
* Enterprise Architecture Diagram
* Redux Flow Diagram
* Router Flow Diagram
* Component Hierarchy Diagram
* Testing Report
* Performance Optimization Report
* Project Presentation


## Author

Pancham Sharma
