export function categories(req, res, next) {
  return res.status(200).json({
    data: [
      {
        id: '1',
        type: 'category',
        attributes: {
          name: 'All Categories',
          selected_icon:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--056705960737373e41047c8b54b90c63703c583c/all.svg',
          unselected_icon:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ceee8fc04eadc30e065f957cb6045a3b18b8682b/all.svg',
          sub_categories: [],
          programs_count: 467,
        },
      },
      {
        id: '2',
        type: 'category',
        attributes: {
          name: 'Innovation',
          selected_icon:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--10f1db9d95925515ea2060ebc5205d7b3314297c/innovation.svg',
          unselected_icon:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--24bc8a6bfe42d683487c1e1715fc2c59aeaabdde/innovation.svg',
          sub_categories: [
            'Innovation Management',
            'Change Management',
            'New Product Development',
            'Design Thinking',
          ],
          programs_count: 39,
        },
      },
      {
        id: '3',
        type: 'category',
        attributes: {
          name: 'Digital Transformation',
          selected_icon:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--964f1dee186e8a0115ba7727f88d591b26fabcdc/digital.svg',
          unselected_icon:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--03a71ae8199f67ff35a7ef39e50c3524f314f791/digital.svg',
          sub_categories: [],
          programs_count: 20,
        },
      },
      {
        id: '4',
        type: 'category',
        attributes: {
          name: 'Finance \u0026 FinTech',
          selected_icon:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBHQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f9b84cbbebcebfdf61054ce49715c96a0ea96a47/finance.svg',
          unselected_icon:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBHUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a4a3d6fc661870d7b81bc7ec5ea2257cb914259d/finance.svg',
          sub_categories: [
            'Risk Management',
            'Financial Modelling',
            'Business Taxation',
            'Corporate Valuation',
            'Mergers \u0026 Acquisitions',
            'Derivatives',
            'FinTech',
            'Private Equity',
            'Investments',
          ],
          programs_count: 60,
        },
      },
      {
        id: '5',
        type: 'category',
        attributes: {
          name: 'Business Analytics',
          selected_icon:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBIdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8a238dfbeaecf9223e336e90d7a1ab65f2dc3ae1/analytics.svg',
          unselected_icon:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBJQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--701853d7994679c41a621275d4b4d000bc665e0c/analytics.svg',
          sub_categories: [
            'Artificial Intelligence',
            'Machine Learning',
            'Digital Analytics',
            'Predictive Analytics',
            'Business Analytics',
          ],
          programs_count: 28,
        },
      },
      {
        id: '6',
        type: 'category',
        attributes: {
          name: 'Operations',
          selected_icon:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBKZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--466b13a870ce91153f1c54574fe320efc794fae6/operations.svg',
          unselected_icon:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBKdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--53b67611cbbc56b15cd391bc53372e4946562170/operations.svg',
          sub_categories: [
            'Operation Excellence',
            'Supply Chain Management',
            'Project Management',
          ],
          programs_count: 11,
        },
      },
      {
        id: '7',
        type: 'category',
        attributes: {
          name: 'Leadership/HRM',
          selected_icon:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBMUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9a433a466c66a866e504f52f3aa69a379394ca70/leadership.svg',
          unselected_icon:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBMZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--be5d022baad45a52a995912b7ddbd33c4c0ddb9a/leadership.svg',
          sub_categories: [],
          programs_count: 172,
        },
      },
      {
        id: '8',
        type: 'category',
        attributes: {
          name: 'Marketing',
          selected_icon:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBOQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e7c9cf1e2000100536d882dfaef79acdf35879f6/marketing.svg',
          unselected_icon:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBOUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1335c7bda79fa610ee33c798a6bc3f0d250b6501/marketing.svg',
          sub_categories: [
            'Digital Marketing',
            'Strategic Marketing',
            'Brand Management',
            'Hi-Tech Marketing',
            'Retail Management',
            'Pricing',
            'B2B Marketing',
          ],
          programs_count: 35,
        },
      },
      {
        id: '9',
        type: 'category',
        attributes: {
          name: 'Strategy',
          selected_icon:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBPdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ab940644e1e0c03e1c8282259d69b70b3349ed7b/strategy.svg',
          unselected_icon:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBQQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--93623ee36abdeb623447e16ea73973228d774248/strategy.svg',
          sub_categories: [],
          programs_count: 72,
        },
      },
      {
        id: '10',
        type: 'category',
        attributes: {
          name: 'Technology',
          selected_icon:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBXZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6add863994f8036b6144b933a3ff988382499963/Technology-white.svg',
          unselected_icon:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBXdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e0ea1a0320f8a618c3a30ef1b5b45b980b594650/Technology.svg',
          sub_categories: ['Cyber Security', 'Cloud Computing', 'Networking'],
          programs_count: 4,
        },
      },
      {
        id: '11',
        type: 'category',
        attributes: {
          name: 'General Management',
          selected_icon:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdlFDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--096eb75c005275d1dec1e8cf807b6b2455df5a0d/Geneal%20Management%20_white.svg',
          unselected_icon:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdlVDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6f80190588ddfac7a8bec75ef1c621ad38b36ad8/Geneal%20Management%20_dark.svg',
          sub_categories: [],
          programs_count: 26,
        },
      },
    ],
  });
}

export function university(req, res, next) {
  return res.status(200).json({
    data: [
      {
        id: 'IIMRLGMH01141',
        type: 'program',
        attributes: {
          name: 'Executive PG Diploma Programme in Management (ePGPx) Batch-04',
          apply_by: '2021-02-22T00:00:00.000Z',
          start_date: '2021-05-01T00:00:00.000Z',
          end_date: '2022-04-30T00:00:00.000Z',
          contact_days: '',
          site_url: 'https://admission.iimrohtak.ac.in/epgpx/',
          certificate_program: true,
          eligibility: 'For executives with at least 5 years of experience',
          alumini_status: true,
          placement_assistance: false,
          delivery: 'Hybrid',
          knowledge_level: 'Intermediate',
          program_image:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdTBGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9a18b3082360ab831d2fa47597141fbb14d231ef/general_management_22.jpg',
          program_card_image:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdThGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--da81498db9a311d04ae20743a1ddf9b44a0fbf7c/general_management_22.jpg',
          program_mobile_image:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdTRGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--986a2002e7a3d5f053cc4d146a0178884155ad08/general_management_22.jpg',
          duration: '1 year',
          brochure_url: 'https://www.iimrohtak.ac.in/pdf/epgpx/prospectus.pdf',
          category_id: 11,
          university_logo:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdUlGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3a38c391779d807a0ab7ae371210795bb02874fa/iim_rohatak.jpg',
          new: false,
          location: 'Rohtak',
          university_code: 'IIMR',
          university_name: 'IIM Rohtak',
          program_price: '715524 INR',
          program_fee: '715524 INR',
          category_name: 'General Management',
        },
        relationships: {},
      },
      {
        id: 'IIMLSMAL01123',
        type: 'program',
        attributes: {
          name: 'Digital Marketing',
          apply_by: '2021-03-16T00:00:00.000Z',
          start_date: '2021-03-17T00:00:00.000Z',
          end_date: '2021-03-23T00:00:00.000Z',
          contact_days: '7',
          site_url: ' http://www.iiml.ac.in/admission/Mdp/mdpRegistration/MjE5',
          certificate_program: false,
          eligibility: 'For mid level managers with 5+ years of experience',
          alumini_status: false,
          placement_assistance: false,
          delivery: 'Live Online',
          knowledge_level: 'Intermediate',
          program_image:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcW9GIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bdc9ebc15929d72f2f9ced4c624995592ed268e5/Digital_marketing-desktop.jpg',
          program_card_image:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcXdGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3713e35116d19ea036ba7a6d9a6361ef26669fbf/Digital_marketing-card.jpg',
          program_mobile_image:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcXNGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1760ab72007786f3f949d53c456e9c23878fce55/Digital_marketing-mobile.jpg',
          duration: '7 days',
          brochure_url:
            'http://14.139.245.91/ims/uploads/MDP/06-10-2020-62765.pdf',
          category_id: 8,
          university_logo:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcUlGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--80280d46defa050e24ae7c563570b9732d1b2cca/_0012__0006_iim-lucknow.jpg',
          new: false,
          location: 'Online',
          university_code: 'IIML',
          university_name: 'IIM Lucknow',
          program_price: '50000 INR',
          program_fee: '50000 INR + GST',
          category_name: 'Marketing',
        },
        relationships: {},
      },
      {
        id: 'IIMLSDIL01122',
        type: 'program',
        attributes: {
          name: 'Digital Mindset and Design Thinking',
          apply_by: '2021-02-21T00:00:00.000Z',
          start_date: '2021-02-22T00:00:00.000Z',
          end_date: '2021-02-27T00:00:00.000Z',
          contact_days: '6',
          site_url: 'http://www.iiml.ac.in/admission/Mdp/mdpRegistration/MTU1',
          certificate_program: false,
          eligibility: 'For managers who aspire to learn digital technologies',
          alumini_status: false,
          placement_assistance: false,
          delivery: 'Live Online',
          knowledge_level: 'Intermediate',
          program_image:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcWNGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--cf5997981e496546ca64484270e19c96385d39f7/Digital-Mindset-desktop.jpg',
          program_card_image:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcWtGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5fcf61d70c20daec2e0c433a9e422f5ff3205c5d/Digital-Mindset-card.jpg',
          program_mobile_image:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcWdGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5985736b99b228c48164eda713aca3d4717e0ff5/Digital-Mindset-mobile.jpg',
          duration: '6 days',
          brochure_url:
            'http://14.139.245.91/ims/uploads/MDP/06-10-2020-17207.pdf',
          category_id: 3,
          university_logo:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcUlGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--80280d46defa050e24ae7c563570b9732d1b2cca/_0012__0006_iim-lucknow.jpg',
          new: false,
          location: 'Online',
          university_code: 'IIML',
          university_name: 'IIM Lucknow',
          program_price: '40000 INR',
          program_fee: '40000 INR + GST',
          category_name: 'Digital Transformation',
        },
        relationships: {},
      },
      {
        id: 'IIMLSMAL01121',
        type: 'program',
        attributes: {
          name: 'Marketing Analytics: Data Driven Marketing',
          apply_by: '2021-02-20T00:00:00.000Z',
          start_date: '2021-02-21T00:00:00.000Z',
          end_date: '2021-02-26T00:00:00.000Z',
          contact_days: '6',
          site_url: 'http://www.iiml.ac.in/admission/Mdp/mdpRegistration/MjE2',
          certificate_program: false,
          eligibility: 'For sales \u0026 Marketing executives',
          alumini_status: false,
          placement_assistance: false,
          delivery: 'Live Online',
          knowledge_level: 'Intermediate',
          program_image:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcVFGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d10575214c9010e006c861c68b1ac60e56565695/Maketing-Analytics-desktop.jpg',
          program_card_image:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcVlGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3c944d237e2556424521a97d5902ead360ad29f2/Maketing-Analytics-card.jpg',
          program_mobile_image:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcVVGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--edfc23b5195bb0a3f898d84f65f97a13b1a082e0/Maketing-Analytics-mobile.jpg',
          duration: '6 days',
          brochure_url:
            'http://14.139.245.91/ims/uploads/MDP/06-10-2020-53242.pdf',
          category_id: 8,
          university_logo:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcUlGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--80280d46defa050e24ae7c563570b9732d1b2cca/_0012__0006_iim-lucknow.jpg',
          new: false,
          location: 'Online',
          university_code: 'IIML',
          university_name: 'IIM Lucknow',
          program_price: '40000 INR',
          program_fee: '40000 INR + GST',
          category_name: 'Marketing',
        },
        relationships: {},
      },
    ],
  });
}

export function program(req, res, next) {
  return res.status(200).json({
    data: [
      {
        id: 'IIMRLGMH01141',
        type: 'program',
        attributes: {
          name: 'Executive PG Diploma Programme in Management (ePGPx) Batch-04',
          apply_by: '2021-02-22T00:00:00.000Z',
          start_date: '2021-05-01T00:00:00.000Z',
          end_date: '2022-04-30T00:00:00.000Z',
          contact_days: '',
          site_url: 'https://admission.iimrohtak.ac.in/epgpx/',
          certificate_program: true,
          eligibility: 'For executives with at least 5 years of experience',
          alumini_status: true,
          placement_assistance: false,
          delivery: 'Hybrid',
          knowledge_level: 'Intermediate',
          program_image:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdTBGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9a18b3082360ab831d2fa47597141fbb14d231ef/general_management_22.jpg',
          program_card_image:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdThGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--da81498db9a311d04ae20743a1ddf9b44a0fbf7c/general_management_22.jpg',
          program_mobile_image:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdTRGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--986a2002e7a3d5f053cc4d146a0178884155ad08/general_management_22.jpg',
          duration: '1 year',
          brochure_url: 'https://www.iimrohtak.ac.in/pdf/epgpx/prospectus.pdf',
          category_id: 11,
          university_logo:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdUlGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3a38c391779d807a0ab7ae371210795bb02874fa/iim_rohatak.jpg',
          new: false,
          location: 'Rohtak',
          university_code: 'IIMR',
          university_name: 'IIM Rohtak',
          program_price: '715524 INR',
          program_fee: '715524 INR',
          category_name: 'General Management',
        },
        relationships: {},
      },
      {
        id: 'IIMLSMAL01123',
        type: 'program',
        attributes: {
          name: 'Digital Marketing',
          apply_by: '2021-03-16T00:00:00.000Z',
          start_date: '2021-03-17T00:00:00.000Z',
          end_date: '2021-03-23T00:00:00.000Z',
          contact_days: '7',
          site_url: ' http://www.iiml.ac.in/admission/Mdp/mdpRegistration/MjE5',
          certificate_program: false,
          eligibility: 'For mid level managers with 5+ years of experience',
          alumini_status: false,
          placement_assistance: false,
          delivery: 'Live Online',
          knowledge_level: 'Intermediate',
          program_image:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcW9GIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bdc9ebc15929d72f2f9ced4c624995592ed268e5/Digital_marketing-desktop.jpg',
          program_card_image:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcXdGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3713e35116d19ea036ba7a6d9a6361ef26669fbf/Digital_marketing-card.jpg',
          program_mobile_image:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcXNGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1760ab72007786f3f949d53c456e9c23878fce55/Digital_marketing-mobile.jpg',
          duration: '7 days',
          brochure_url:
            'http://14.139.245.91/ims/uploads/MDP/06-10-2020-62765.pdf',
          category_id: 8,
          university_logo:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcUlGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--80280d46defa050e24ae7c563570b9732d1b2cca/_0012__0006_iim-lucknow.jpg',
          new: false,
          location: 'Online',
          university_code: 'IIML',
          university_name: 'IIM Lucknow',
          program_price: '50000 INR',
          program_fee: '50000 INR + GST',
          category_name: 'Marketing',
        },
        relationships: {},
      },
      {
        id: 'IIMLSDIL01122',
        type: 'program',
        attributes: {
          name: 'Digital Mindset and Design Thinking',
          apply_by: '2021-02-21T00:00:00.000Z',
          start_date: '2021-02-22T00:00:00.000Z',
          end_date: '2021-02-27T00:00:00.000Z',
          contact_days: '6',
          site_url: 'http://www.iiml.ac.in/admission/Mdp/mdpRegistration/MTU1',
          certificate_program: false,
          eligibility: 'For managers who aspire to learn digital technologies',
          alumini_status: false,
          placement_assistance: false,
          delivery: 'Live Online',
          knowledge_level: 'Intermediate',
          program_image:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcWNGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--cf5997981e496546ca64484270e19c96385d39f7/Digital-Mindset-desktop.jpg',
          program_card_image:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcWtGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5fcf61d70c20daec2e0c433a9e422f5ff3205c5d/Digital-Mindset-card.jpg',
          program_mobile_image:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcWdGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5985736b99b228c48164eda713aca3d4717e0ff5/Digital-Mindset-mobile.jpg',
          duration: '6 days',
          brochure_url:
            'http://14.139.245.91/ims/uploads/MDP/06-10-2020-17207.pdf',
          category_id: 3,
          university_logo:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcUlGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--80280d46defa050e24ae7c563570b9732d1b2cca/_0012__0006_iim-lucknow.jpg',
          new: false,
          location: 'Online',
          university_code: 'IIML',
          university_name: 'IIM Lucknow',
          program_price: '40000 INR',
          program_fee: '40000 INR + GST',
          category_name: 'Digital Transformation',
        },
        relationships: {},
      },
      {
        id: 'IIMLSMAL01121',
        type: 'program',
        attributes: {
          name: 'Marketing Analytics: Data Driven Marketing',
          apply_by: '2021-02-20T00:00:00.000Z',
          start_date: '2021-02-21T00:00:00.000Z',
          end_date: '2021-02-26T00:00:00.000Z',
          contact_days: '6',
          site_url: 'http://www.iiml.ac.in/admission/Mdp/mdpRegistration/MjE2',
          certificate_program: false,
          eligibility: 'For sales \u0026 Marketing executives',
          alumini_status: false,
          placement_assistance: false,
          delivery: 'Live Online',
          knowledge_level: 'Intermediate',
          program_image:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcVFGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d10575214c9010e006c861c68b1ac60e56565695/Maketing-Analytics-desktop.jpg',
          program_card_image:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcVlGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3c944d237e2556424521a97d5902ead360ad29f2/Maketing-Analytics-card.jpg',
          program_mobile_image:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcVVGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--edfc23b5195bb0a3f898d84f65f97a13b1a082e0/Maketing-Analytics-mobile.jpg',
          duration: '6 days',
          brochure_url:
            'http://14.139.245.91/ims/uploads/MDP/06-10-2020-53242.pdf',
          category_id: 8,
          university_logo:
            '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcUlGIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--80280d46defa050e24ae7c563570b9732d1b2cca/_0012__0006_iim-lucknow.jpg',
          new: false,
          location: 'Online',
          university_code: 'IIML',
          university_name: 'IIM Lucknow',
          program_price: '40000 INR',
          program_fee: '40000 INR + GST',
          category_name: 'Marketing',
        },
        relationships: {},
      },
    ],
  });
}

export function programspecific(req, res, next) {
  if (p1 == req.params.id) {
    return res.status(200).json(p1);
  } else {
    return res.status(200).json(p2);
  }
}

const p1 = {
  data: [
    {
      id: 'LSOBLMAS01249',
      type: 'program',
      attributes: {
        name: 'Mastering Digital Marketing - Online',
        apply_by: '2021-02-11T00:00:00.000Z',
        start_date: '2021-02-11T00:00:00.000Z',
        end_date: '2021-05-06T00:00:00.000Z',
        contact_days: '24',
        site_url:
          'https://www.london.edu/executive-education/online-courses/mastering-digital-marketing',
        certificate_program: true,
        eligibility:
          'Early-career marketers, Non-marketing leaders, Professionals from a non-marketing field, Experienced traditional marketers',
        alumini_status: false,
        placement_assistance: false,
        delivery: 'Self-Paced Online',
        knowledge_level: 'Beginner',
        program_image:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbHNIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1174b7dfd917e636d0ab74034822bf509e8fcf3e/Marketing-22.jpg',
        program_card_image:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbDBIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e016e2756d81f3f83f78ab43cfa457722a0ac46b/Marketing-22.jpg',
        program_mobile_image:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbHdIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6f12c5bd9cd6a49145d53d3efc80eb7f7d69e151/Marketing-22.jpg',
        duration: '12 weeks',
        brochure_url: '',
        category_id: 8,
        university_logo:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBWHM9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2ecbe22b5603c00e9f40003348eb680c0cdb7c1b/_0001_LBS.jpg',
        new: true,
        location: 'Online',
        university_code: 'LSOB',
        university_name: 'London Business School',
        program_price: '2500 GBP',
        program_fee: '2500 GBP',
        category_name: 'Marketing',
      },
      relationships: {},
    },
    {
      id: 'INSESBUL01327',
      type: 'program',
      attributes: {
        name: 'AI for Business ',
        apply_by: '2021-03-01T00:00:00.000Z',
        start_date: '2021-03-01T00:00:00.000Z',
        end_date: null,
        contact_days: '5',
        site_url:
          'https://www.insead.edu/executive-education/digital-transformation-innovation/ai-business',
        certificate_program: false,
        eligibility: 'Senior Executives',
        alumini_status: false,
        placement_assistance: false,
        delivery: 'Live Online',
        knowledge_level: 'Advanced',
        program_image:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcEVIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0ef6a7c25f00aa4209c5882dd3cdc6e6be1706c9/analytics-12.jpg',
        program_card_image:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcE1IIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--00c6dd1a51b04610a3446678a807afc18ef3f449/analytics-12.jpg',
        program_mobile_image:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcElIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--907479ed62f8d73dbcfe776390b032150e4b7b53/analytics-12.jpg',
        duration: '5 Days',
        brochure_url: '',
        category_id: 5,
        university_logo:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBmZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--fd4c332053b51932cd00e135b5241f7d119b2d3c/_0009_insead.jpg',
        new: true,
        location: 'Online',
        university_code: 'INSE',
        university_name: 'INSEAD',
        program_price: '6000 EUR',
        program_fee: '6000 EUR',
        category_name: 'Business Analytics',
      },
      relationships: {},
    },
    {
      id: 'IIMBSSTL00614',
      type: 'program',
      attributes: {
        name: 'Strategy Consulting (Live Online Programme)',
        apply_by: '2021-02-12T00:00:00.000Z',
        start_date: '2021-02-17T00:00:00.000Z',
        end_date: '2021-02-21T00:00:00.000Z',
        contact_days: '5',
        site_url:
          'https://www.iimb.ac.in/eep/product/156/Strategy_Consulting1?management=StrategyGeneralManagement\u0026addurl=S00910\u0026Ref=undefined',
        certificate_program: false,
        eligibility: 'For mid \u0026 senior level executives',
        alumini_status: false,
        placement_assistance: false,
        delivery: 'Live Online',
        knowledge_level: 'Intermediate',
        program_image:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaDhEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6dbb40260c1d25f6c6cc152f1184a8d8fd87c8e2/Strategy_1.jpg',
        program_card_image:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaUVEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--388b83e6d700c20be05ed3dc443837a24d13b6f7/Strategy_1.jpg',
        program_mobile_image:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaUFEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2410bc4337abb2932097b4cd5228497cbd5f619b/Strategy_1.jpg',
        duration: '5 days',
        brochure_url:
          'https://www.iimb.ac.in/eep/product/downloadProgrammeBrochure/?p_id=156',
        category_id: 9,
        university_logo:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBZUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a3f0e9caa9b7f9b6e94329fcda7b11a7388f59d3/_0016__0002_IIMB.jpg',
        new: false,
        location: 'Online',
        university_code: 'IIMB',
        university_name: 'IIM Bangalore',
        program_price: '76500 INR',
        program_fee: '76500 INR + GST',
        category_name: 'Strategy',
      },
      relationships: {},
    },
    {
      id: 'COLUSDIL01431',
      type: 'program',
      attributes: {
        name:
          'Executive Access: Accelerating Digital Transformation for the COVID Era',
        apply_by: '2021-03-09T00:00:00.000Z',
        start_date: '2021-03-09T00:00:00.000Z',
        end_date: '2021-03-09T00:00:00.000Z',
        contact_days: '1',
        site_url:
          'https://www8.gsb.columbia.edu/execed/program-page/eaadt?sourceid=finder',
        certificate_program: false,
        eligibility: 'For business leaders ',
        alumini_status: false,
        placement_assistance: false,
        delivery: 'Live Online',
        knowledge_level: 'Intermediate',
        program_image:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbmtIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f100cf0ca9f676845e9994aeb5732758d6ea7ab1/Digital-transformation-9.jpg',
        program_card_image:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbnNIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f61d307f65dc0d6d51ad9f9b42cf50c5ba2ccb61/Digital-transformation-9.jpg',
        program_mobile_image:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbm9IIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--be48decda1eeabaf6a2859957a2c7fed1b80ea53/Digital-transformation-9.jpg',
        duration: '1 day',
        brochure_url:
          'http://go-execed.gsb.columbia.edu/Columbia_eaadt_Executive_Summary.pdf',
        category_id: 3,
        university_logo:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBWDA9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--891f999c3e69d49eaf7599955dcb1c2a949b284a/_0011__0007_Columbia_Business_School_logo.jpg',
        new: true,
        location: 'Online',
        university_code: 'COLU',
        university_name: 'Columbia Business School',
        program_price: '450 USD',
        program_fee: '450 USD',
        category_name: 'Digital Transformation',
      },
      relationships: {},
    },
  ],
  meta: { total: 465, page: '1', aggs: {} },
};

const p2 = {
  data: [
    {
      id: 'IMDBLINS00895',
      type: 'program',
      attributes: {
        name: 'Disruptive Innovation(Online)',
        apply_by: '2021-03-20T00:00:00.000Z',
        start_date: '2021-03-22T00:00:00.000Z',
        end_date: '2021-04-25T00:00:00.000Z',
        contact_days: '',
        site_url: 'https://www.imd.org/DI/disruptive-innovation-course/',
        certificate_program: true,
        eligibility: 'Mid to senior level managers',
        alumini_status: false,
        placement_assistance: false,
        delivery: 'Self-Paced Online',
        knowledge_level: 'Intermediate',
        program_image:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb1VIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--91c37a3e4b0fb1b6110a9e33bbbf5dbb547937c9/Innovation-12.jpg',
        program_card_image:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb2NIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3fe9e917ed4350fa690fe4b34a8adaebc8137e2f/Innovation-12.jpg',
        program_mobile_image:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb1lIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--da1408e578e3cbb90d1802acee29d5040580d4c4/Innovation-12.jpg',
        duration: '5 weeks',
        brochure_url: '',
        category_id: 2,
        university_logo:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBjQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--842116080009be8202c344ddbb21c7c85da953d3/_0007_IMD_registration.jpg',
        new: true,
        location: 'Online',
        university_code: 'IMDB',
        university_name: 'IMD Business School',
        program_price: '1950 CHF',
        program_fee: '1950 CHF',
        category_name: 'Innovation',
      },
      relationships: {},
    },
    {
      id: 'INSESINC01342',
      type: 'program',
      attributes: {
        name: 'Strategic R\u0026D Management ',
        apply_by: '2021-05-03T00:00:00.000Z',
        start_date: '2021-05-03T00:00:00.000Z',
        end_date: null,
        contact_days: '5',
        site_url:
          'https://www.insead.edu/executive-education/research-development-operations-management/strategic-research-development-management',
        certificate_program: false,
        eligibility: 'Senior Leaders',
        alumini_status: false,
        placement_assistance: false,
        delivery: 'Class Room',
        knowledge_level: 'Advanced',
        program_image:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0daa870fa34eebcc8e82e6c5d9f1d80a267dbe6d/innovation.jpg',
        program_card_image:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBFQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--dc983bafda16ac7c87d0d54e9702c10413f4dc85/innovation.jpg',
        program_mobile_image:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBEdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1cc84ed4e9cbdd367481bc9f370f0579eb26a607/innovation.jpg',
        duration: '5 Days',
        brochure_url: '',
        category_id: 2,
        university_logo:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBmZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--fd4c332053b51932cd00e135b5241f7d119b2d3c/_0009_insead.jpg',
        new: true,
        location: 'Fontainebleau ',
        university_code: 'INSE',
        university_name: 'INSEAD',
        program_price: '9,650\t EUR',
        program_fee: '9,650\t EUR',
        category_name: 'Innovation',
      },
      relationships: {},
    },
    {
      id: 'HBUSLINL00280',
      type: 'program',
      attributes: {
        name: 'Disruptive Innovation—Virtual',
        apply_by: '2021-05-10T00:00:00.000Z',
        start_date: '2021-05-10T00:00:00.000Z',
        end_date: '2021-05-21T00:00:00.000Z',
        contact_days: '10',
        site_url: 'https://www.exed.hbs.edu/disruptive-innovation-virtual/',
        certificate_program: true,
        eligibility: 'For senior executives',
        alumini_status: false,
        placement_assistance: false,
        delivery: 'Live Online',
        knowledge_level: 'Intermediate',
        program_image:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb3NIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--320f397cdf559a42a5709f31803d76138f3270bf/Strategy_20.jpg',
        program_card_image:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbzBIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e0252abd0ec7fddbb030d1631d106caffc12f74f/Strategy_20.jpg',
        program_mobile_image:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb3dIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e9bbf9bc52407fe97ca16c56ab1633042416f3e4/Strategy_20.jpg',
        duration: '12 days',
        brochure_url:
          'https://www.exed.hbs.edu/Documents/disruptive-innovation-virtual-brochure.pdf',
        category_id: 2,
        university_logo:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBaUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4c4dd7deea45d8e1a5ed96f031afe54bf76e18fb/_0003_Harvard%20.jpg',
        new: true,
        location: 'Online',
        university_code: 'HBUS',
        university_name: 'Harvard Business School',
        program_price: '7500 USD',
        program_fee: '7500 USD',
        category_name: 'Innovation',
      },
      relationships: {},
    },
    {
      id: 'LSOBLINH01241',
      type: 'program',
      attributes: {
        name: 'Exploiting Disruption in a Digital World',
        apply_by: '2021-06-18T00:00:00.000Z',
        start_date: '2021-06-20T00:00:00.000Z',
        end_date: '2021-06-25T00:00:00.000Z',
        contact_days: '5.5',
        site_url:
          'https://www.london.edu/executive-education/digital-transformation-and-innovation/exploiting-disruption-in-a-digital-world',
        certificate_program: true,
        eligibility:
          'Senior executives and leaders, Managing directors, regional directors and country managers.',
        alumini_status: false,
        placement_assistance: false,
        delivery: 'Hybrid',
        knowledge_level: 'Beginner',
        program_image:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcFFIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0b61bc686dff3302929cdde59d7a2f2c53f0e6f5/Innovation-2.jpg',
        program_card_image:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcFlIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e21c3909b9b88cdbc270c27a2320512cd2609d6c/Innovation-2.jpg',
        program_mobile_image:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcFVIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b11ff7fc8a9db6e7f6218c9c3fbedf6989ea2077/Innovation-2.jpg',
        duration: '5.5 days',
        brochure_url: '',
        category_id: 2,
        university_logo:
          '/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBWHM9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2ecbe22b5603c00e9f40003348eb680c0cdb7c1b/_0001_LBS.jpg',
        new: true,
        location: 'London',
        university_code: 'LSOB',
        university_name: 'London Business School',
        program_price: '8500 GBP',
        program_fee: '8500 GBP',
        category_name: 'Innovation',
      },
      relationships: {},
    },
  ],
  meta: { total: 39, page: '1', aggs: {} },
};
