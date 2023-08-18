import React from 'react';

const Service = ({ name, className }) => {
  return (
    <svg
      name={name}
      className={`h-20px fill-none transition-all duration-150 ease-in ${className}`}
      viewBox='0 0 35 35'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M29.5312 14C30.6349 14.6356 31.5299 15.5786 32.1069 16.714C32.6839 17.8494 32.918 19.1282 32.7807 20.3944C32.6434 21.6606 32.1406 22.8595 31.3337 23.8449C30.5268 24.8302 29.4505 25.5595 28.2362 25.9438C27.8071 27.8913 26.7257 29.6339 25.171 30.883C23.6164 32.1321 21.6818 32.8129 19.6875 32.8125H16.4062C16.1162 32.8125 15.838 32.6973 15.6328 32.4921C15.4277 32.287 15.3125 32.0088 15.3125 31.7188C15.3125 31.4287 15.4277 31.1505 15.6328 30.9454C15.838 30.7402 16.1162 30.625 16.4062 30.625H19.6875C21.0451 30.6254 22.3694 30.2049 23.4781 29.4214C24.5868 28.6378 25.4253 27.5299 25.8781 26.25H25.1562C24.8662 26.25 24.588 26.1348 24.3828 25.9296C24.1777 25.7245 24.0625 25.4463 24.0625 25.1563V14.2187C24.0625 13.9287 24.1777 13.6505 24.3828 13.4454C24.588 13.2402 24.8662 13.125 25.1562 13.125H26.25C26.6044 13.125 26.9522 13.1534 27.2934 13.2081C27.0472 10.782 25.9091 8.53355 24.0998 6.89855C22.2904 5.26355 19.9386 4.35835 17.5 4.35835C15.0613 4.35835 12.7095 5.26355 10.9002 6.89855C9.09083 8.53355 7.95279 10.782 7.70655 13.2081C8.05161 13.1529 8.40052 13.1251 8.74999 13.125H9.84374C10.1338 13.125 10.412 13.2402 10.6171 13.4454C10.8223 13.6505 10.9375 13.9287 10.9375 14.2187V25.1563C10.9375 25.4463 10.8223 25.7245 10.6171 25.9296C10.412 26.1348 10.1338 26.25 9.84374 26.25H8.74999C7.30401 26.2516 5.89798 25.7756 4.75036 24.8959C3.60273 24.0163 2.77777 22.7822 2.40364 21.3855C2.02952 19.9887 2.12717 18.5075 2.68144 17.172C3.23571 15.8365 4.21555 14.7214 5.46873 14C5.46873 10.8091 6.73631 7.74892 8.99261 5.49262C11.2489 3.23632 14.3091 1.96875 17.5 1.96875C20.6909 1.96875 23.7511 3.23632 26.0074 5.49262C28.2637 7.74892 29.5312 10.8091 29.5312 14ZM8.74999 15.3125C7.58966 15.3125 6.47686 15.7734 5.65639 16.5939C4.83592 17.4144 4.37498 18.5272 4.37498 19.6875C4.37498 20.8478 4.83592 21.9606 5.65639 22.7811C6.47686 23.6016 7.58966 24.0625 8.74999 24.0625V15.3125ZM30.625 19.6875C30.625 18.5272 30.164 17.4144 29.3436 16.5939C28.5231 15.7734 27.4103 15.3125 26.25 15.3125V24.0625C27.4103 24.0625 28.5231 23.6016 29.3436 22.7811C30.164 21.9606 30.625 20.8478 30.625 19.6875Z'
        fill='black'
      />
    </svg>
  );
};

export { Service };
