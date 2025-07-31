export default function BannerPage({ image }) {
  return (
    <div className="w-full h-[55vh]">
      <img className="w-full h-full object-cover object-top" src={image} />
    </div>
  );
}
