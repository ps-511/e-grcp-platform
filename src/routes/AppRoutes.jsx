  import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { lazy, Suspense } from "react";

import Loader from "../components/Loader";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import RoleProtectedRoute from "./RoleProtectedRoute";
const AccessDeniedPage = lazy(() =>
  import(
    "../features/auth/AccessDeniedPage"
  )
);
const ApprovalPage = lazy(() =>
  import("../features/approval/ApprovalPage")
);

const LoginPage = lazy(() =>
  import("../features/auth/LoginPage")
);

const ProcurementPage = lazy(() =>
  import("../features/procurement/ProcurementPage")
);

const ProcurementDetailsPage = lazy(() =>
  import("../features/procurement/ProcurementDetailsPage")
);

const ForgotPasswordPage = lazy(() =>
  import("../features/auth/ForgotPasswordPage")
);

const ResetPasswordPage = lazy(() =>
  import("../features/auth/ResetPasswordPage")
);

const SessionExpiredPage = lazy(() =>
  import("../features/auth/SessionExpiredPage")
);

const NotificationsPage = lazy(() =>
  import("../features/notifications/NotificationsPage")
);

const DashboardPage = lazy(() =>
  import("../features/dashboard/DashboardPage")
);

const VendorsPage = lazy(() =>
  import("../features/vendors/VendorsPage")
);

const VendorDetailsPage = lazy(() =>
  import("../features/vendors/VendorDetailsPage")
);

const ReportsPage = lazy(() =>
  import("../features/reports/ReportsPage")
);

const SettingsPage = lazy(() =>
  import("../features/settings/SettingsPage")
);

const RiskPage = lazy(() =>
  import("../features/risk/RiskPage")
);

const CompliancePage = lazy(() =>
  import("../features/compliance/CompliancePage")
);

const AuditPage = lazy(() =>
  import("../features/audit/AuditPage")
);

function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>

<Route
  path="/"
  element={
    <Navigate
      to="/login"
      replace
    />
  }
/>

<Route
  path="/login"
  element={<LoginPage />}
/>

        <Route
          path="/forgot-password"
          element={<ForgotPasswordPage />}
        />

        <Route
          path="/reset-password"
          element={<ResetPasswordPage />}
        />

        <Route
          path="/session-expired"
          element={<SessionExpiredPage />}
        />

        <Route
  path="/access-denied"
  element={
    <MainLayout>
      <AccessDeniedPage />
    </MainLayout>
  }
/>

        <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <RoleProtectedRoute
        allowedRoles={[
          "Administrator",
        ]}
      >
        <MainLayout>
          <DashboardPage />
        </MainLayout>
      </RoleProtectedRoute>
    </ProtectedRoute>
  }
/>
        {/* PROCUREMENT */}

        <Route
          path="/procurement"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute
                allowedRoles={[
                  "Administrator",
                  "Procurement Manager",
                ]}
              >
                <MainLayout>
                  <ProcurementPage />
                </MainLayout>
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/procurement/:id"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute
                allowedRoles={[
                  "Administrator",
                  "Procurement Manager",
                ]}
              >
                <MainLayout>
                  <ProcurementDetailsPage />
                </MainLayout>
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />

        {/* APPROVAL */}

        <Route
          path="/approval"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute
                allowedRoles={[
                  "Administrator",
                  "Procurement Manager",
                ]}
              >
                <MainLayout>
                  <ApprovalPage />
                </MainLayout>
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />

        {/* VENDORS */}

        <Route
          path="/vendors"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute
                allowedRoles={[
                  "Administrator",
                  "Procurement Manager",
                ]}
              >
                <MainLayout>
                  <VendorsPage />
                </MainLayout>
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/vendors/:id"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute
                allowedRoles={[
                  "Administrator",
                  "Procurement Manager",
                ]}
              >
                <MainLayout>
                  <VendorDetailsPage />
                </MainLayout>
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />

        {/* RISK */}

 <Route
  path="/risk"
  element={
    <ProtectedRoute>
      <RoleProtectedRoute
        allowedRoles={[
          "Administrator",
        ]}
      >
        <MainLayout>
          <RiskPage />
        </MainLayout>
      </RoleProtectedRoute>
    </ProtectedRoute>
  }
/>

        {/* COMPLIANCE */}

        <Route
          path="/compliance"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute
                allowedRoles={[
                  "Administrator",
                  "Compliance Officer",
                ]}
              >
                <MainLayout>
                  <CompliancePage />
                </MainLayout>
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />

        {/* AUDIT */}

        <Route
          path="/audit"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute
                allowedRoles={[
                  "Administrator",
                  "Auditor",
                ]}
              >
                <MainLayout>
                  <AuditPage />
                </MainLayout>
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />

        {/* REPORTS */}

        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute
                allowedRoles={[
                  "Administrator",
                  "Auditor",
                  "Compliance Officer",
                ]}
              >
                <MainLayout>
                  <ReportsPage />
                </MainLayout>
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />

        {/* NOTIFICATIONS */}

        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <MainLayout>
                <NotificationsPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        {/* SETTINGS */}

        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <MainLayout>
                <SettingsPage />
              </MainLayout>
            </ProtectedRoute>
          }
        />
<Route
  path="*"
  element={
    <Navigate
      to="/login"
      replace
    />
  }
/>
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;