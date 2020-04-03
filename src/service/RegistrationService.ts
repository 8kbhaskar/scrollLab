/*
 * Business logics
 *      or 
 * Calculations with reqest data
 * prepare response DTO(data transfer object)
 */
import { RegistrationRepository } from '../repository'
import { IRegistationOneModel, IRegistationTwoModel, IRegistationThreeModel, IRegistationFourModel } from '../util/types/Models'
import { generateUserJWToken } from '../util/utils'
import { } from '../util/utils'
import uuid from 'node-uuid';

export const step_one = async (params: any) => {
                try {
                                let stepOne: IRegistationOneModel = {
                                                userId: uuid.v4(),
                                                username: params.username,
                                                password: params.password,
                                                firstName: params.firstName,
                                                lastName: params.lastName,
                                                email: params.email,
                                                mobile: params.mobile,
                                                policyStatus: params.policyStatus,
                                                status: 'ACTIVE',

                                }
                                let data: IRegistationOneModel = await RegistrationRepository.saveStepOne(stepOne)
                                data.token = await generateUserJWToken(data)
                                return data;
                } catch (err) {
                                console.log('[stepone err] :', err);
                }


}


export const step_two = async (params: any) => {
                try {
                                let stepTwo: IRegistationTwoModel = {
                                                gender: params.gender,
                                                address: params.address,
                                                pincode: params.pincode,
                                                city: params.city,
                                                state: params.state,
                                                country: params.country,
                                                aadhaar: params.aadhaar,
                                                pan: params.pan,
                                                gst: params.gst

                                }

                                let data: IRegistationOneModel = await RegistrationRepository.update(stepTwo, params.userId)
                                return data;
                } catch (err) {
                                console.log('[stepone err] :', err);
                }


}


export const step_three = async (params: any) => {
                try {
                                let stepThree: IRegistationThreeModel = {
                                                categoryId: JSON.parse(JSON.stringify(params.categoryId))


                                }

                                let data: IRegistationOneModel = await RegistrationRepository.update(stepThree, params.userId)
                                return data;
                } catch (err) {
                                console.log('[stepone err] :', err);
                }


}


export const step_four = async (params: any) => {
                try {
                                let stepFour: IRegistationFourModel = {
                                                socialMediaHandles: {
                                                                github: params.github,
                                                                twitter: params.twitter,
                                                                instagram: params.instagram,
                                                                facebook: params.facebook,
                                                                linkedin: params.linkedin,
                                                                youtube: params.youtube,
                                                                tiktok: params.tiktok
                                                }


                                }

                                let data: IRegistationOneModel = await RegistrationRepository.update(stepFour, params.userId)
                                return data;
                } catch (err) {
                                console.log('[stepone err] :', err);
                }


}

