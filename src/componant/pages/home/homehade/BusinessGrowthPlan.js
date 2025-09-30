import React from 'react';

const steps = [
	{ title: 'Q4 2025: Nationwide Delivery', desc: 'Expand logistics partners to reach every district with 3-day delivery.' },
	{ title: 'Q1 2026: Seller Success Program', desc: 'Training, analytics, and financing options to help local sellers grow.' },
	{ title: 'Q2 2026: Smart Recommendations', desc: 'AI-powered personalized deals and bundles to increase savings.' },
	{ title: 'Q3 2026: Cross-border Imports', desc: 'Bring trending global products with customs-handled checkout.' },
];

const BusinessGrowthPlan = () => {
	return (
		<section className='mt-12'>
			<h2 className='text-2xl md:text-3xl font-bold text-center mb-6'>Our Growth Roadmap</h2>
			<div className='grid gap-4 md:grid-cols-2'>
				{steps.map((s, i) => (
					<div key={i} className='rounded-xl p-5 border border-base-200 bg-base-100'>
						<div className='flex items-start gap-3'>
							<div className='w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold'>{i + 1}</div>
							<div>
								<div className='font-semibold text-lg'>{s.title}</div>
								<p className='opacity-80'>{s.desc}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default BusinessGrowthPlan;


