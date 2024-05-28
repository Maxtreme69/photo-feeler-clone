import datingImage1 from './images/dating/males/photo-male-1.webp';
import datingImage2 from './images/dating/males/photo-male-2.webp';
import datingImage3 from './images/dating/males/photo-male-3.webp';
import datingImage4 from './images/dating/males/photo-male-4.webp';
import datingImage5 from './images/dating/males/photo-male-5.webp';

import datingImage6 from './images/dating/females/photo-female-1.webp';
import datingImage7 from './images/dating/females/photo-female-2.webp';
import datingImage8 from './images/dating/females/photo-female-3.webp';
import datingImage9 from './images/dating/females/photo-female-4.webp';
import datingImage10 from './images/dating/females/photo-female-5.webp';

import socialImage1 from './images/social/photo-male-social-1.jpg';
import socialImage2 from './images/social/photo-male-social-2.jpg';
import socialImage3 from './images/social/photo-male-social-3.jpg';
import socialImage4 from './images/social/photo-male-social-4.jpg';
import socialImage5 from './images/social/photo-male-social-5.jpg';

import socialImage6 from './images/social/photo-female-social-1.jpg';
import socialImage7 from './images/social/photo-female-social-2.jpg';
import socialImage8 from './images/social/photo-female-social-3.jpg';
import socialImage9 from './images/social/photo-female-social-4.jpg';
import socialImage10 from './images/social/photo-female-social-5.jpg';

import businessImage1 from './images/business/photo-male-business-1.jpg';
import businessImage2 from './images/business/photo-male-business-2.jpg';
import businessImage3 from './images/business/photo-male-business-3.jpg';
import businessImage4 from './images/business/photo-male-business-4.jpg';
import businessImage5 from './images/business/photo-male-business-5.jpg';
import businessImage6 from './images/business/photo-male-business-6.jpg';
import businessImage7 from './images/business/photo-male-business-7.jpg';
import businessImage8 from './images/business/photo-male-business-8.jpg';
import businessImage9 from './images/business/photo-male-business-9.jpg';
import businessImage10 from './images/business/photo-male-business-10.jpg';

import businessImage11 from './images/business/photo-female-business-1.jpg';
import businessImage12 from './images/business/photo-female-business-2.jpg';
import businessImage13 from './images/business/photo-female-business-3.jpg';
import businessImage14 from './images/business/photo-female-business-4.jpg';
import businessImage15 from './images/business/photo-female-business-5.jpg';
import businessImage16 from './images/business/photo-female-business-6.jpg';
import businessImage17 from './images/business/photo-female-business-7.jpg';

const images = {
  dating: [
    datingImage1, datingImage2, datingImage3, datingImage4, datingImage5,
    datingImage6, datingImage7, datingImage8, datingImage9, datingImage10
  ],
  social: [
    socialImage1, socialImage2, socialImage3, socialImage4, socialImage5,
    socialImage6, socialImage7, socialImage8, socialImage9, socialImage10
  ],
  business: [
    businessImage1, businessImage2, businessImage3, businessImage4, businessImage5,
    businessImage6, businessImage7, businessImage8, businessImage9, businessImage10,
    businessImage11, businessImage12, businessImage13, businessImage14, businessImage15,
    businessImage16, businessImage17
  ]
};

const imagePathsToKeys = {
  dating: {
    [datingImage1]: 'datingImage1',
    [datingImage2]: 'datingImage2',
    [datingImage3]: 'datingImage3',
    [datingImage4]: 'datingImage4',
    [datingImage5]: 'datingImage5',
    [datingImage6]: 'datingImage6',
    [datingImage7]: 'datingImage7',
    [datingImage8]: 'datingImage8',
    [datingImage9]: 'datingImage9',
    [datingImage10]: 'datingImage10'
  },
  social: {
    [socialImage1]: 'socialImage1',
    [socialImage2]: 'socialImage2',
    [socialImage3]: 'socialImage3',
    [socialImage4]: 'socialImage4',
    [socialImage5]: 'socialImage5',
    [socialImage6]: 'socialImage6',
    [socialImage7]: 'socialImage7',
    [socialImage8]: 'socialImage8',
    [socialImage9]: 'socialImage9',
    [socialImage10]: 'socialImage10'
  },
  business: {
    [businessImage1]: 'businessImage1',
    [businessImage2]: 'businessImage2',
    [businessImage3]: 'businessImage3',
    [businessImage4]: 'businessImage4',
    [businessImage5]: 'businessImage5',
    [businessImage6]: 'businessImage6',
    [businessImage7]: 'businessImage7',
    [businessImage8]: 'businessImage8',
    [businessImage9]: 'businessImage9',
    [businessImage10]: 'businessImage10',
    [businessImage11]: 'businessImage11',
    [businessImage12]: 'businessImage12',
    [businessImage13]: 'businessImage13',
    [businessImage14]: 'businessImage14',
    [businessImage15]: 'businessImage15',
    [businessImage16]: 'businessImage16',
    [businessImage17]: 'businessImage17'
  }
};

export { images, imagePathsToKeys };
