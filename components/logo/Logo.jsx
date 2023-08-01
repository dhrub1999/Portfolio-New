import React from "react";
import Link from "next/link";

const Logo = ({ className }) => {
  return (
    <Link href={"/"}>
      <svg
        width="48"
        height="41"
        viewBox="0 0 48 41"
        className={`${className}`}
      >
        <path d="M31.8031 40.6154C30.72 40.6154 22.8595 40.0718 22.7939 40.0718C22.7282 40.0718 22.597 40.0718 22.4 40.0718C21.9406 40.0718 21.399 39.9895 20.7754 39.8249C20.1846 39.693 19.5938 39.5119 19.0031 39.2813C18.4451 39.0836 17.9528 38.8531 17.5261 38.5896C17.1323 38.3261 16.8862 38.0954 16.7876 37.8978C16.7549 37.4366 16.7384 36.959 16.7384 36.4649C16.7384 35.9708 16.7384 35.4931 16.7384 35.0319C16.7384 31.3427 17.001 27.4886 17.5261 23.4699C18.0841 19.4513 18.9866 15.1031 20.2338 10.4256C20.3651 9.96443 20.4964 9.38798 20.6276 8.69624C20.7918 7.97155 20.9558 7.19745 21.12 6.37394C20.3323 6.99981 19.3969 8.00449 18.3138 9.38798C17.2308 10.7385 16.082 12.3526 14.8676 14.2302C13.6861 16.0748 12.4882 18.1171 11.2738 20.3571C21.12 33.0061 10.7002 20.9501 8.02462 27.1263C7.04 29.3991 6.18667 31.6556 5.46462 33.8955C4.77539 36.1355 16.2133 38.7048 16.0493 40.6154C14.4738 40.1541 1.50974 39.1989 0.886154 38.7378C0.295385 38.2766 0 37.7166 0 37.0578C0 36.4649 0.180512 35.6249 0.541538 34.5379C0.902564 33.4508 1.41128 32.1662 2.0677 30.6839C2.72411 29.2015 3.5282 27.5545 4.48 25.7429C5.4318 23.8982 6.48205 21.9217 7.63076 19.8135C8.94359 17.409 10.2236 15.1525 11.4708 13.0444C12.7507 10.9362 13.998 9.02564 15.2123 7.31275C16.4267 5.59984 17.6082 4.11753 18.757 2.8658C19.9385 1.61407 21.1036 0.658807 22.2523 0C22.7118 0 23.319 0.115291 24.0738 0.345875C24.8615 0.576456 25.6164 0.856449 26.3384 1.18585C27.0934 1.51525 27.7498 1.86113 28.3076 2.22347C28.8985 2.55288 29.2267 2.83286 29.2924 3.06344C28.8328 3.98577 28.2913 5.36927 27.6677 7.21393C27.0442 9.05858 26.4041 11.1503 25.7477 13.4891C25.1242 15.8278 24.517 18.3148 23.9262 20.9501C23.3682 23.5523 22.9252 26.0557 22.597 28.4604C23.3518 26.6487 24.2215 24.7711 25.2061 22.8276C26.2236 20.8512 27.2903 18.9077 28.4062 16.9972C29.522 15.0538 30.6544 13.1761 31.8031 11.3644C32.9846 9.55268 34.1333 7.90567 35.2493 6.42336C36.3652 4.90811 37.399 3.59049 38.3508 2.47052C39.3354 1.35055 40.2052 0.527046 40.96 0C41.4194 0 42.0266 0.115291 42.7816 0.345875C43.5692 0.576456 44.3242 0.856449 45.0462 1.18585C45.801 1.51525 46.4574 1.86113 47.0154 2.22347C47.6062 2.55288 47.9344 2.83286 48 3.06344C46.9498 4.94105 46.0308 7.23039 45.2431 9.93149C44.4554 12.6326 43.7826 15.4655 43.2246 18.4301C42.6995 21.3947 42.2892 24.3428 41.9939 27.2745C41.7313 30.1733 41.6 32.7756 41.6 35.0814C41.6 35.8391 41.6 36.6296 41.6 37.4531C41.6 38.2766 41.6328 39.1331 41.6984 40.0225C41.239 40.0225 40.6811 39.9566 40.0246 39.8249C39.401 39.726 38.7774 39.5778 38.1539 39.3801C37.5631 39.1825 37.0216 38.9519 36.5292 38.6883C36.037 38.4578 35.6923 38.1943 35.4954 37.8978C35.4625 37.4366 35.4462 36.959 35.4462 36.4649C35.4462 35.9708 35.4462 35.4931 35.4462 35.0319C35.4462 31.3427 35.7088 27.4886 36.2339 23.4699C36.7918 19.4513 37.6944 15.1031 38.9416 10.4256C39.0728 9.96443 39.2206 9.33857 39.3846 8.548C39.5488 7.75744 39.7128 6.93393 39.877 6.07748C38.958 6.53865 37.9076 7.42803 36.7261 8.74564C35.5775 10.0303 34.3958 11.6114 33.1816 13.4891C32 15.3337 30.8185 17.3924 29.6369 19.6653C40.96 31.7215 29.2924 20.3571 26.4862 26.6322C25.5672 28.971 24.7795 31.3098 24.1231 33.6485C23.4995 35.9543 22.0554 38.046 31.8031 40.6154Z" />
      </svg>
    </Link>
  );
};

export default Logo;
