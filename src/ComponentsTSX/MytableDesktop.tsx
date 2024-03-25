// MyTableDesktop.tsx

import React from 'react';
import { Title } from '../ComponentsStyle/Title.styles';
import { FlexContainer } from '../ComponentsStyle/FlexContainer.styles';
import { Image } from '../ComponentsStyle/Images.styles';
import Counter from './Counter';
import { Table, TableCell } from '../ComponentsStyle/Table.style';
import { View } from '../ComponentsStyle/View.styled';

const Trash = require('../Assets/Trash.png');

const MyTableDesktop = ({ data, onUpdateQuantity, removeItem }: any) => {

    return (
        <Table>
            <thead>
                <tr>
                    <th style={{ width: '280px' }}>
                        <Title align='left' color='#999999' fontSize='14px'>PRODUTO</Title>
                    </th>
                    <th style={{ width: '348px' }}>
                        <Title color='#999999' align='left' fontSize='14px'>QDT</Title>
                    </th>
                    <th style={{ width: '348px' }}>
                        <Title color='#999999' align='left' fontSize='14px'>SUBTOTAL</Title>
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((item: any) => (
                    <tr key={item.id}>
                        <TableCell>
                            <FlexContainer>
                                <Image style={{ width: '91px', height: '114px' }} src={item.image} />
                                <View style={{ paddingLeft: '16px' }}>
                                    <Title align='left' color='#2F2E41' fontSize='14px'> {item.title} </Title>
                                    <Title align='left' color='#2F2E41' fontSize='16px'> R$ {item.price} </Title>
                                </View>
                            </FlexContainer>
                        </TableCell>
                        <TableCell>
                            <Counter data={item} onUpdateQuantity={onUpdateQuantity} />
                        </TableCell>
                        <TableCell>
                            <Title color='#2F2E41' align='left' fontSize='16px'> R$ {item.subtotal || item.price} </Title>
                        </TableCell>
                        <TableCell style={{ textAlign: 'right' }}>
                            <Image onClick={() => removeItem(item.id)} src={Trash} />
                        </TableCell>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default MyTableDesktop;
