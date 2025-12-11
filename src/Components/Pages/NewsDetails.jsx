import React from "react";
import Header from "../Header";
import RightAside from "../HomeLayout/RightAside";
import NewsDetailsCard from "../NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    console.log(data, id);
  return (
    <div>
      <header className="py-4">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10">
        <section className="col-span-9">
            <h2 className="font-bold mb-5">News Details</h2>
            <NewsDetailsCard></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
            <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
