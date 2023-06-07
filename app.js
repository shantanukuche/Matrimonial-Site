    (function(){
	const customerImage = document.querySelector('#customer-img')
	const customerName = document.querySelector('#customer-name')
	const customerText = document.querySelector('#customer-text')

	const btn = document.querySelectorAll('.btn')
	let index = 0
	const customers=[]
	function Customer(img,name,text)
	{
		this.img=img
		this.name=name
		this.text=text
	}
	function createCustomer(img,name,text)
	{
		let Img =`./img/${img}.jpg`
		let customer=new Customer(Img, name, text)
		customers.push(customer)

	}
	createCustomer(0,'Ruchin Singh','An ideal 3-day weekend trek in Manali, with a total distance of 16 kms')
	createCustomer(1,'Meen Bahadur Thapa ','A perfect 3-day weekend escapade in himachal that takes you to the staggering altitude of 14,100 feet in such a short span,')
	createCustomer(2,'Vivek Jacob','Hampta Pass is the most dramatic crossover trek in the Pir Panjal Range of the Himalayas. With a trekking distance of 35 km, this 5-day trekking extravaganza takes you to an ambitious altitude of 14,039 feet.')
	createCustomer(3,'Arun Ambathy','If you are looking for 11 days of sheer exhilaration, then Pin Parvati trek is your true calling! The imposing altitude of 17,457 feet of Pin Parvati Pass leaves less for imagination.')
	

	btn.forEach(function(button)
	{
		button.addEventListener('click',function(e)
		{
			if (e.target.parentElement.classList.contains('prevBtn')) 
			{
				if(index===0)
				{
					index=customers.length
				}
				index--
				customerImage.src=customers[index].img
				customerName.textContent=customers[index].name
				customerText.textContent=customers[index].text

			}
			if (e.target.parentElement.classList.contains('nextBtn')) 
			{
				index++
				if(index===customers.length) 
				{
					index=0
				}
				
				customerImage.src=customers[index].img
				customerName.textContent=customers[index].name
				customerText.textContent=customers[index].text

			}

		})
	})
})()
