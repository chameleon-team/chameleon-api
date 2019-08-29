import index from './index.interface';

export default function chooseImage({
    type = 'choice',
    quality = '60'
  }) {
  return new Promise((resolve, reject) => {
    index.chooseImage(
      {tyep,quality},
      (res) => {
        resolve(res);
      },
      (err) => {
        reject(err);
      }
    );
  });
}
