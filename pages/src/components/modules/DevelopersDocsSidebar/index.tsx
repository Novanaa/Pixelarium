"use client";

import { HeadingFour } from "@/components/ui/Typographies/Heading";
import Link from "next/link";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

export default function DevelopersDocsSidebar(): React.ReactElement {
  return (
    <>
      <section className="fixed flex h-[90vh] flex-col gap-6 overflow-y-scroll py-[2rem] pr-5 opacity-90">
        <DevelopersDocsSidebarSearchInput />
        <div className="mt-1 h-[0.15rem] w-full border-b"></div>
        <DevelopersDocsSidebarContent />
      </section>
    </>
  );
}

function DevelopersDocsSidebarSearchInput(): React.ReactElement {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  return (
    <div className="flex">
      <Input
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="relative inline-flex w-[14rem] cursor-pointer items-center justify-start whitespace-nowrap rounded-[0.5rem] border border-input bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-none transition-colors hover:bg-accent hover:text-accent-foreground hover:placeholder:text-primary focus:outline-none focus:outline-0 focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50"
        placeholder="Search Documentation..."
      />
    </div>
  );
}

const dummyData = [
  {
    id: 1,
    title: "Getting Started",
    items: [
      {
        itemsId: 1,
        title: "Introduction",
        url: "/docs/v1",
      },
      {
        itemsId: 2,
        title: "Quick Start",
        url: "/docs/v1/quick-start",
      },
    ],
  },
  {
    id: 2,
    title: "Essentials",
    items: [
      {
        itemsId: 1,
        title: "Resources",
        url: "/docs/v1/resources",
      },
      {
        itemsId: 2,
        title: "Routes",
        url: "/docs/v1/routes",
      },
      {
        itemsId: 3,
        title: "Payloads",
        url: "/docs/v1/payloads",
      },
      {
        itemsId: 4,
        title: "Files Upload",
        url: "/docs/v1/files-upload",
      },
      {
        itemsId: 5,
        title: "Middlewares",
        url: "/docs/v1/middlewares",
      },
    ],
  },
  {
    id: 3,
    title: "Auth",
    items: [
      {
        itemsId: 1,
        title: "Register",
        url: "/docs/v1/auth/register",
      },
      {
        itemsId: 2,
        title: "Login",
        url: "/docs/v1/auth/login",
      },
      {
        itemsId: 3,
        title: "Logout",
        url: "/docs/v1/auth/logout",
      },
    ],
  },
  {
    id: 4,
    title: "Products",
    items: [
      {
        itemsId: 1,
        title: "all products",
        url: "/docs/v1/products",
      },
      {
        itemsId: 2,
        title: "single product",
        url: "/docs/v1/products/single-product",
      },
      {
        itemsId: 3,
        title: "search queries products",
        url: "/docs/v1/products/search-products",
      },
      {
        itemsId: 4,
        title: "all categories",
        url: "/docs/v1/products/categories",
      },
      {
        itemsId: 5,
        title: "single categories",
        url: "/docs/v1/products/categories/single-categories",
      },
      {
        itemsId: 6,
        title: "add product",
        url: "/docs/v1/products/add-product",
      },
      {
        itemsId: 7,
        title: "update product",
        url: "/docs/v1/products/update-product",
      },
      {
        itemsId: 8,
        title: "delete product",
        url: "/docs/v1/products/delete-product",
      },
    ],
  },
  {
    id: 5,
    title: "Carts",
    items: [
      {
        itemsId: 1,
        title: "all carts",
        url: "/docs/v1/carts",
      },
      {
        itemsId: 2,
        title: "single cart",
        url: "/docs/v1/carts/single-cart",
      },
      {
        itemsId: 3,
        title: "add cart",
        url: "/docs/v1/carts/add-cart",
      },
      {
        itemsId: 4,
        title: "update cart",
        url: "/docs/v1/carts/update-cart",
      },
      {
        itemsId: 5,
        title: "delete cart",
        url: "/docs/v1/carts/delete-cart",
      },
    ],
  },
  {
    id: 6,
    title: "Books",
    items: [
      {
        itemsId: 1,
        title: "all books",
        url: "/docs/v1/books",
      },
      {
        itemsId: 2,
        title: "single book",
        url: "/docs/v1/books/single-book",
      },
      {
        itemsId: 3,
        title: "all categories",
        url: "/docs/v1/books/categories",
      },
      {
        itemsId: 4,
        title: "single categories",
        url: "/docs/v1/books/categories/single-categories",
      },
      {
        itemsId: 5,
        title: "search queries books",
        url: "/docs/v1/books/search-books",
      },
      {
        itemsId: 6,
        title: "add book",
        url: "/docs/v1/books/add-book",
      },
      {
        itemsId: 7,
        title: "update book",
        url: "/docs/v1/books/update-book",
      },
      {
        itemsId: 8,
        title: "delete book",
        url: "/docs/v1/books/delete-book",
      },
    ],
  },
  {
    id: 7,
    title: "Users",
    items: [
      {
        itemsId: 1,
        title: "all users",
        url: "/docs/v1/users",
      },
      {
        itemsId: 2,
        title: "single user",
        url: "/docs/v1/users/single-user",
      },
      {
        itemsId: 3,
        title: "search queries users",
        url: "/docs/v1/users/search-users",
      },
      {
        itemsId: 4,
        title: "update user",
        url: "/docs/v1/users/update-user",
      },
      {
        itemsId: 5,
        title: "delete user",
        url: "/docs/v1/users/delete-user",
      },
    ],
  },
];
function DevelopersDocsSidebarContent(): Array<React.ReactElement> {
  return dummyData.map((d, i) => {
    return (
      <div className="flex flex-col gap-3" key={i}>
        <HeadingFour className="font-semibold">{d.title}</HeadingFour>
        <div className="flex flex-col gap-2 font-medium">
          {d.items.map((i, ind) => {
            return (
              <Link
                href={i.url}
                key={ind}
                className="text-primary/70 hover:text-primary/95"
              >
                {i.title}
              </Link>
            );
          })}
        </div>
      </div>
    );
  });
}
