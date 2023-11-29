'use client';

import classNames from 'classnames';
import { useState } from 'react';

import { Typography } from '@/components/ui/typography';

import style from './description.module.scss';

export const Descriprion = () => {
  const [isTextVisible, setTextVisible] = useState<boolean>(false);

  const toggleTextVisibility = () => {
    setTextVisible(!isTextVisible);
  };
  return (
    <section className={classNames('container', style.descrContainer)}>
      <Typography
        fontWeight={'semiBold'}
        element={'h1'}
        className={style.title}>
        Опис
      </Typography>

      <Typography fontWeight={'bold'} element={'h5'} className={style.titleTxt}>
        Lorem ipsum dolor sit amet consectetur. Malesuada maecenas quisque
        bibendum eu enim enim nunc tortor euismod. Elementum sed hac et eu nec.
        Aliquam venenatis lobortis viverra molestie fusce aliquam fermentum.
        Mattis quis cras nisi mi eget lacinia neque quam sapien.
      </Typography>
      <br />

      <button
        className={style.hiddenText}
        type={'button'}
        onClick={toggleTextVisibility}>
        <Typography
          fontWeight={'regular'}
          type={'body'}
          element={'h6'}
          className={
            isTextVisible
              ? `${style.desctiptionTxt} ${style.open}`
              : `${style.desctiptionTxt}`
          }>
          Lorem ipsum dolor sit amet consectetur. Sit ipsum quisque iaculis
          egestas ut tellus. Mattis proin risus adipiscing adipiscing in a
          facilisis interdum cursus. Ipsum et sed duis scelerisque mauris nulla
          nisl viverra. Interdum dui et ut eu quis praesent dui porttitor sit.
          Pellentesque adipiscing aliquet amet velit vitae convallis. Nunc
          feugiat nunc egestas mauris diam volutpat. Sit ut malesuada fringilla
          sodales pretium ullamcorper. Justo vehicula tincidunt libero morbi
          dolor magna. Auctor risus leo facilisis vel nec mauris. <br /> Blandit
          eget donec blandit eleifend. Interdum integer dui phasellus a non.
          Augue leo in nec ac donec. Elementum etiam urna amet justo fermentum.
          Amet egestas eu lectus luctus at. Ipsum suscipit ultrices est dui
          aliquet. Amet fringilla senectus mi adipiscing mauris. Aliquet justo
          netus nullam arcu lectus. Molestie varius eleifend volutpat turpis
          fames aenean. Dictum egestas convallis adipiscing sed sit lobortis sem
          amet ornare. Elementum integer adipiscing lorem varius proin ut et
          sed. Orci gravida senectus sollicitudin cras eu. <br />
          Integer aliquam risus tellus fermentum dolor. Phasellus eu sed
          adipiscing massa sit at turpis elementum quam. Neque a tristique amet
          facilisi luctus volutpat. A commodo eget et at malesuada facilisis
          elit consectetur purus. Tempus in tortor odio est. Nam dignissim in
          diam dictumst ultricies varius lobortis eu volutpat. Aenean vitae eget
          ornare pellentesque quam consequat amet euismod sollicitudin.
          Ultricies elementum molestie nibh velit ligula eget morbi augue morbi.
          Quam eget ac at a sit tempor turpis ac. Dui pellentesque magna quis
          neque. Egestas lorem turpis turpis eu. Eu feugiat sit egestas euismod
          ac at sollicitudin lobortis turpis. Sit ut sed condimentum laoreet
          varius eget a non. Sed dui elit sed massa donec.
          <br />
          Suscipit odio enim mauris maecenas. Eget porttitor risus lorem
          venenatis. Feugiat nullam proin vehicula augue egestas ultrices odio
          lacus aenean. Augue consequat arcu neque malesuada orci sit habitasse
          vestibulum.
        </Typography>
      </button>
    </section>
  );
};
