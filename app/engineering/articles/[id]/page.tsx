import React from "react";

import { FaImage } from "react-icons/fa";

import ContentLandAnim from "@/components/animations/ContentLandAnim";
import ArticleActions from "@/components/pages/engPage/articles/ArticleActions";
import Discussion from "@/components/pages/engPage/articles/Discussion";

/**
 *
 * This component displays an article's page
 *
 * @returns JSX
 */
const ArticlePage = () => {
  return (
    <main className="w-full max-w-7xl mx-auto p-5 min-h-[calc(100vh-105px)]">
      <ContentLandAnim style="flex flex-col gap-5">
        <div className="flex flex-col gap-5 mx-auto max-w-[680px]">
          <div className="bg-extra grid place-items-center rounded-md shadow-onRest w-full h-[400px]">
            <FaImage className="icon text-5xl" />
          </div>
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <h2>Article Title</h2>
              <small>published Feb 19, 2025</small>
            </div>

            <ArticleActions />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
            illo numquam aliquid tempora quidem quibusdam, culpa, recusandae,
            dignissimos incidunt porro et laboriosam quod ab molestiae magnam.
            Dicta totam porro velit corporis exercitationem consectetur! Quos
            dolor molestias nulla tenetur quidem vero! Beatae quam distinctio
            amet aperiam quo temporibus minus saepe magnam blanditiis veniam?
            Incidunt pariatur nemo similique corrupti amet excepturi sit placeat
            reprehenderit officia soluta ullam accusamus iusto temporibus dicta
            iste, molestiae facere error illo vero sapiente! Velit eligendi
            molestias consequuntur magnam amet dolorum doloremque. Error
            temporibus ut quia obcaecati recusandae earum non fuga laboriosam,
            distinctio nostrum aspernatur consequuntur iste dicta. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Fuga, facere! Quae,
            voluptatibus ipsam? Fugit sequi, natus vitae error odit doloremque.
            Eaque facilis aliquid nam deserunt, voluptas facere cupiditate
            cumque debitis, dolorum ullam suscipit quae possimus, placeat error
            saepe deleniti illum quo amet unde labore eligendi sint autem
            perferendis quam.
            <br />
            <br /> Ipsam illum ducimus dolores sunt quo dolore voluptatibus
            fugiat fuga enim dolorem, odio, dolor alias dicta magni doloribus
            doloremque cum deleniti quibusdam repellendus laudantium laborum.
            Minus impedit perspiciatis aperiam esse dignissimos, voluptas porro
            explicabo aspernatur libero exercitationem! Veritatis temporibus
            cupiditate, similique quidem esse voluptas vel nulla, laudantium
            distinctio illo quasi ut? Magni tenetur porro suscipit commodi, ab
            consequuntur reiciendis quam quas harum corrupti in dolorem
            similique deserunt iste! Animi iure, pariatur consequatur ipsam
            autem voluptas eaque molestias, ut sunt facere minus. Aut deserunt
            perspiciatis culpa molestias eius beatae ad nihil autem eos nam,
            inventore natus commodi explicabo minus enim voluptas nobis? <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur ut delectus laboriosam hic iure, provident doloribus
            magnam, impedit esse perspiciatis minima deserunt voluptatem quaerat
            odit pariatur autem eveniet! Tenetur dolorum doloremque consequuntur
            laborum iste dolorem, quaerat sunt veritatis quia ea praesentium
            illum repellat, deserunt voluptates architecto quae non error!
            Aliquam.
          </p>
        </div>

        <hr className="border-[1px] border-secondary/15 w-full" />

        <Discussion />
      </ContentLandAnim>
    </main>
  );
};

export default ArticlePage;
