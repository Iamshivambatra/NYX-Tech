
const rawImages = import.meta.glob('./*{.svg,.png,.jpg,.jpeg}', {
  eager: true,
  import: 'default',
});

const icons = Object.fromEntries(
  Object.entries(rawImages).map(([key, value]) => [
    key.replace('./', '').replace(/\.(svg|png|jpg|jpeg)$/, ''),
    value,
  ])
);

export default icons;
