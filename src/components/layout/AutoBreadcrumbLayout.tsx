// src/components/layout/AutoBreadcrumbLayout.tsx

import { Outlet, useLocation } from "react-router-dom"
import AutoBreadcrumb from "../shared/AutoBreadcrumb"


export default function AutoBreadcrumbLayout() {
  const location = useLocation()
  const isHeroPage = location.pathname === "/"

  return (
    <>
      {!isHeroPage && <AutoBreadcrumb />}
      <Outlet />
    </>
  )
}
