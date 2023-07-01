export default function Collection() {
    return <>

<div className="join w-full justify-center">
  <input type="search" className="input input-bordered join-item w-96" placeholder="Type a wallet here"/>
  <button className="btn join-item">Search</button>
</div>
<div className="grid grid-cols-2 gap-2 place-items-center">
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</div>


    </>
  }