import React from "react";
import Link from "next/link";
import { pagination, active } from "./Pagination.module.scss";

/**
 * Cách làm: Nếu totalPages < 10 thì hiển thị toàn bộ các số từ 1-9, nếu ko, hiển thị 3 phần:
 * - Phần 1: hiển thị currentPage và 2 số cạnh nó (có thể là 2 số bên trái, 2 số bên phải hoặc 1 trái 1 phải)
 * - Phần 2,3: mỗi phần hiển thị 2 số và dấu ...
 */
export default function Pagination({ baseURL, totalPages, currentPage, scroll = true }) {
  const pageURL = baseURL + "/page";
  if (totalPages <= 1) return "";
  const pageArray = [];
  if (totalPages < 10) {
    [...Array(totalPages)].map((_, i) => {
      pageArray.push(i + 1);
      return null;
    });
  } else {
    if (currentPage <= 4) {
      pageArray.push(1, 2, 3, 4, 5, "...", totalPages - 2, totalPages - 1, totalPages);
    } else if (currentPage >= totalPages - 3) {
      pageArray.push(1, 2, 3, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pageArray.push(1, 2, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages - 1, totalPages);
    }
  }
  return (
    <div className={pagination}>
      <Link href={currentPage <= 2 ? baseURL : `${pageURL}/${currentPage - 1}`} scroll={scroll}>
        <i className="fa fa-angle-double-left" aria-hidden="true"></i>
      </Link>
      {pageArray.map((page, index) => {
        if (page !== currentPage && page !== "...")
          return (
            <Link href={page === 1 ? baseURL : `${pageURL}/${page}`} key={index} scroll={scroll}>
              {page}
            </Link>
          );
        else
          return (
            <span className={page !== currentPage ? "" : active} key={index}>
              {page}
            </span>
          );
      })}
      <Link
        href={currentPage === totalPages ? `${pageURL}/${currentPage}` : `${pageURL}/${currentPage + 1}`}
        scroll={scroll}
      >
        <i className="fa fa-angle-double-right" aria-hidden="true"></i>
      </Link>
    </div>
  );
}
