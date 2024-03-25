import React from 'react';

import { Title } from '../ComponentsStyle/Title.styles';
import { FlexContainer, ContainerSpace } from '../ComponentsStyle/FlexContainer.styles';
import { Espacing } from '../ComponentsStyle/Container.styles';
import { Button } from '../ComponentsStyle/Buttons.styles';
import Counter from '../ComponentsTSX/Counter';
import { Image } from '../ComponentsStyle/Images.styles';
import { Table, TableCell } from '../ComponentsStyle/Table.style';
import { View } from '../ComponentsStyle/View.styled';

const MyTableMobile = ({ data, onUpdateQuantity, removeItem, total, Finish }: any) => {

    const Trash = require('../Assets/Trash.png');

    return (
        <>
            <Table>
                <tbody>
                    {data.map((item: any) => (
                        <tr key={item.id}>
                            <TableCell>
                                <FlexContainer>
                                    <img style={{ width: '64px', height: '82px' }} src={item.image} alt={item.title} />
                                    <View style={{ flex: 1 }}>
                                        <ContainerSpace>
                                            <Title align='left' color='#2F2E41' fontSize='14px'> {item.title} </Title>
                                            <FlexContainer>
                                                <Title align='left' color='#2F2E41' fontSize='16px'> R$ {item.price} </Title>
                                                <Image src={Trash} onClick={() => removeItem(item.id)} />
                                            </FlexContainer>
                                        </ContainerSpace>
                                        <Espacing espaccing='16px' />
                                        <ContainerSpace>
                                            <Counter data={item} onUpdateQuantity={onUpdateQuantity} />
                                            <View style={{ marginRight: '17px' }}>
                                                <Title color='#999999' align='center' fontSize='12px'>SUBTOTAL</Title>
                                                <Title align='center' color='#2F2E41' fontSize='16px'>{item.subtotal}</Title>
                                            </View>
                                        </ContainerSpace>
                                    </View>
                                </FlexContainer>
                            </TableCell>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Espacing />
            <View style={{ height: '1px', backgroundColor: '#999999' }}></View>
            <Espacing />
            <ContainerSpace>
                <Title color='#999999' fontSize='14px'>TOTAL</Title>
                <Title color='#2F2E41' fontSize='24px'>R$ {total}</Title>
            </ContainerSpace>
            <Espacing />
            <Button onClick={Finish}>
                <Title fontSize='12px' align='center'>
                    FINALIZAR PEDIDO
                </Title>
            </Button>
        </>
    );
}

export default MyTableMobile;
