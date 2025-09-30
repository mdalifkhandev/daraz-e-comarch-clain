import React from 'react';

const Testimonials = () => {
	const reviews = [
		{ name: 'Ayesha Rahman', role: 'Entrepreneur', text: 'Khan Market made my online shopping fast and affordable. Love the quick delivery!', rating: 5 },
		{ name: 'Rafiul Islam', role: 'Student', text: 'Great product variety and amazing deals. The UI is super easy to use.', rating: 4 },
		{ name: 'Samira Akter', role: 'Seller', text: 'As a seller, onboarding was smooth and sales picked up quickly.', rating: 5 },
	];

	return (
		<section className='mt-12'>
			<h2 className='text-2xl md:text-3xl font-bold text-center mb-6'>What our customers say</h2>
			<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
				{reviews.map((r, idx) => (
					<div key={idx} className='rounded-xl p-5 border border-base-200 bg-base-100'>
						<div className='flex items-center gap-2 mb-2'>
							<div className='avatar placeholder'>
								<div className='bg-primary/10 text-primary rounded-full w-10'>
									<span>{r.name.split(' ')[0][0]}{r.name.split(' ')[1]?.[0] || ''}</span>
								</div>
							</div>
							<div>
								<div className='font-semibold'>{r.name}</div>
								<div className='text-xs opacity-70'>{r.role}</div>
							</div>
						</div>
						<p className='mb-3 opacity-90'>{r.text}</p>
						<div className='rating rating-sm'>
							{Array.from({ length: 5 }).map((_, i) => (
								<input key={i} type='radio' name={`rating-${idx}`} className={`mask mask-star-2 ${i < r.rating ? 'bg-orange-400' : 'bg-gray-300'}`} readOnly />
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Testimonials;


